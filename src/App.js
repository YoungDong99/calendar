import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function App() {

  const calendarRef = React.createRef();

  React.useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.setOption('height', 700);
    calendarApi.setOption('width', 700);
  }, []);

  return (
    <div className="App">
      <FullCalendar
        ref={calendarRef}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    </div>
      
  );
}

export default App;
