import './App.css'
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css';
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";

function App() {

  const calendar = useCalendarApp(
      {
        views: [
            createViewWeek(),
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

  return (
    <div style={{ width: '100%', border: '1px solid red' }}>
      <ScheduleXCalendar calendarApp={ calendar } />
    </div>
  )
}

export default App
