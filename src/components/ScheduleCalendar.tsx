"use client";

import { useState } from "react";

interface ScheduleCalendarProps {
  title?: string;
  description?: string;
  availableDates?: number[];
  timeSlots?: string[];
  onBookingComplete?: (bookingData: BookingData) => void;
  eventTitle?: string;
  eventLocation?: string;
}

interface BookingData {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export default function ScheduleCalendar({
  title = "Discovery: Let's Get To Know Each Other",
  description = "Think of this step as our \"first date\"—but without the awkward silences. This is your no-strings-attached moment to learn how I can help you navigate the real estate world like a pro.",
  availableDates = [13, 14, 15, 16, 17],
  timeSlots = [
    "02:45 PM", "03:15 PM", "03:30 PM", "03:45 PM",
    "04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM"
  ],
  onBookingComplete,
  eventTitle = "Discovery Call with Jesse Oñate",
  eventLocation = "Phone Call"
}: ScheduleCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(1); // February = 1 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
  
  // Generate calendar days for current month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleSelectTime = () => {
    if (selectedDate && selectedTime) {
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) return;
    
    // Format the date and time for Google Calendar
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    const timeStr = selectedTime;
    
    // Convert to 24-hour format for Google Calendar
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    let hour24 = parseInt(hours);
    if (period === 'PM' && hour24 !== 12) hour24 += 12;
    if (period === 'AM' && hour24 === 12) hour24 = 0;
    
    const startDateTime = `${dateStr}T${String(hour24).padStart(2, '0')}:${minutes}:00`;
    const endDateTime = `${dateStr}T${String(hour24 + 1).padStart(2, '0')}:${minutes}:00`;
    
    // Create booking data
    const bookingData: BookingData = {
      date: dateStr,
      time: selectedTime,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    };

    // Call callback if provided
    if (onBookingComplete) {
      onBookingComplete(bookingData);
    }
    
    // Create Google Calendar event URL
    const title = encodeURIComponent(eventTitle);
    const details = encodeURIComponent(`Phone consultation with ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    const location = encodeURIComponent(eventLocation);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(/[-:]/g, '')}&details=${details}&location=${location}`;
    
    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, '_blank');
    
    // Reset form
    alert('Opening Google Calendar to confirm your appointment!');
  };

  if (showForm) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8">
        <button 
          onClick={() => setShowForm(false)}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Selected Time:</p>
          <p className="font-bold text-lg">
            {monthNames[currentMonth]} {selectedDate}, {currentYear} at {selectedTime}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Add to Google Calendar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Side - Info */}
        <div className="p-8 bg-gray-50 border-r border-gray-200">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
          </div>

          <div className="text-gray-600 text-sm space-y-4 max-h-96 overflow-y-auto pr-2">
            <p>{description}</p>

            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-green-500 font-bold">•</span>
                <div>
                  <span className="font-semibold">No pressure, no contracts.</span> We'll chat about your goals, timelines, and wishlist—no pushy sales vibes, just honest advice.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 font-bold">•</span>
                <div>
                  <span className="font-semibold">Ask me anything.</span> Whether it's about interest rates or "What's escrow?"—I've got answers.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 font-bold">•</span>
                <div>
                  <span className="font-semibold">Walk away smarter.</span> Even if we don't move forward, you'll leave with free insights to help you in your journey.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Calendar */}
        <div className="p-8">
          <h2 className="text-xl font-bold mb-6">Select Date & Time</h2>

          {/* Calendar */}
          <div className="mb-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-semibold">{monthNames[currentMonth]} {currentYear}</span>
              <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="py-2"></div>
              ))}
              {calendarDays.map((day) => {
                const isAvailable = availableDates.includes(day);
                return (
                  <button
                    key={day}
                    onClick={() => isAvailable && setSelectedDate(day)}
                    className={`
                      py-2 text-sm rounded-lg transition
                      ${selectedDate === day 
                        ? 'bg-black text-white font-bold' 
                        : isAvailable
                        ? 'hover:bg-gray-100 text-gray-900'
                        : 'text-gray-300 cursor-not-allowed'
                      }
                    `}
                    disabled={!isAvailable}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    w-full py-3 px-4 rounded-lg border-2 text-sm font-medium transition
                    ${selectedTime === time
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          {/* Select Button */}
          <button 
            onClick={handleSelectTime}
            className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={!selectedDate || !selectedTime}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
