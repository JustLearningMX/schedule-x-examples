export const MonthGridEvent = ({ calendarEvent }) => {

    return (
        <div
            style={{
                border: '1px solid black',
            }}
        >
            <span>
                { calendarEvent && calendarEvent.title }
            </span>


            { calendarEvent && calendarEvent.status && calendarEvent.status === 'done' ? (
                <>✅</>
            ) : ( <>❗</> )}
        </div>
    )

}