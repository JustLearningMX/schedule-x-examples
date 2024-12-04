import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewMonthGrid} from "@schedule-x/calendar";
import {createEventModalPlugin} from "@schedule-x/event-modal";

export const ScheduleXBasic = () => {

    const appointments = [
        {
            id: 1,
            title: "Event 1",
            start: '2024-12-05 00:00',
            end: '2024-12-05 02:00',
            description: 'Description of event 1',
        }
    ]

    const calendar = useCalendarApp(
        {
            locale: 'es-ES',
            firstDayOfWeek: 0,
            views: [
                createViewMonthGrid(),
            ],
            events: appointments,
            plugins: [
                createEventModalPlugin(),
            ],
        }
    );

    return(
        <ScheduleXCalendar calendarApp={ calendar } />
    );
}