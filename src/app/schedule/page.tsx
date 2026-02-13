import ScheduleCalendar from "@/components/ScheduleCalendar";

export default function SchedulePage() {
  const handleBookingComplete = (bookingData: any) => {
    console.log('Booking completed:', bookingData);
    // You can add additional logic here like sending to an API
  };

  return (
    <div className="min-h-screen bg-green-400 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <ScheduleCalendar
          title="Discovery: Let's Get To Know Each Other"
          description="Think of this step as our 'first date'—but without the awkward silences. This is your no-strings-attached moment to learn how I can help you navigate the real estate world like a pro."
          availableDates={[13, 14, 15, 16, 17]}
          timeSlots={[
            "02:45 PM", "03:15 PM", "03:30 PM", "03:45 PM",
            "04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM"
          ]}
          onBookingComplete={handleBookingComplete}
          eventTitle="Discovery Call with Jesse Oñate"
          eventLocation="Phone Call"
        />
      </div>
    </div>
  );
}
