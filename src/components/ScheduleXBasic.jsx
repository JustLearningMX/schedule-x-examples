import {ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewMonthGrid} from "@schedule-x/calendar";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {MonthGridEvent} from "./MonthGridEvent.jsx";

export const ScheduleXBasic = () => {

    const appointments = [
        {
            id: 1,
            title: "Event 1",
            start: '2024-12-05 00:00',
            end: '2024-12-05 02:00',
            description: 'Description of event 1',
            status: 'todo',
        },
        {
            id: 2,
            title: "Event0 2",
            start: '2024-12-05 06:00',
            end: '2024-12-05 08:00',
            description: 'Description of evento 2',
            status: 'done',
        },
        {
            id: 3,
            title: "Evento 3",
            start: '2024-12-27 13:00',
            end: '2024-12-27 14:00',
            description: 'Description of evento 3',
            status: 'todo',
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
        <ScheduleXCalendar
            calendarApp={ calendar }
            customComponents={{
                monthGridEvent: MonthGridEvent,
                eventModal: ( { calendarEvent } ) => {
                    console.log('e', calendarEvent)
                    return (<>
                        <div
                            style={{
                                border: '1px solid black',
                                padding: '10px',
                            }}
                        >
                            <h2> { calendarEvent.id } </h2>
                        </div>
                    </>)
                }
            }}
        />
    );
}