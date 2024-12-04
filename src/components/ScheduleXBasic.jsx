import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewMonthGrid} from "@schedule-x/calendar";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";

export const ScheduleXBasic = () => {

    const calendar = useCalendarApp(
        {
            locale: 'es-ES',
            views: [
                createViewMonthGrid(),
            ],
            events: [
                {
                    id: 1,
                    title: "Event 1",
                    start: '2024-12-05 00:00',
                    end: '2024-12-05 02:00',
                    description: 'Description of event 1',
                }
            ],
            selectedDate: '2024-12-04',
            plugins: [
                createEventModalPlugin(),
                createDragAndDropPlugin(),
            ],
        }
    );

    return(
        <ScheduleXCalendar calendarApp={ calendar } />
    );
}