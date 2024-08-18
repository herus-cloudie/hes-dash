// ** Mock Adapter
import mock from 'src/@fake-db/mock'
import { Data } from 'src/constant/data'

// ** Types
import { EventType } from 'src/types/apps/calendarTypes'

const { position_table_data } = Data;

const events = position_table_data.map((item , index) => {

  const dateStartParts = item.time.split(" ")[0].split(".");
  const timeStartParts = item.time.split(" ")[1].split(":");
  
  const startYear = parseInt(dateStartParts[0], 10);
  const startMonth = parseInt(dateStartParts[1], 10) - 1; 
  const startDay = parseInt(dateStartParts[2], 10);
  const startHour = parseInt(timeStartParts[0], 10);
  const startMinute = parseInt(timeStartParts[1], 10);

  const dateFinishParts = item.time_2.split(" ")[0].split(".");
  const timeFinishParts = item.time_2.split(" ")[1].split(":");
  
  const finishYear = parseInt(dateFinishParts[0], 10);
  const finishMonth = parseInt(dateFinishParts[1], 10) - 1; 
  const finishDay = parseInt(dateFinishParts[2], 10);
  const finishHour = parseInt(timeFinishParts[0], 10);
  const finishMinute = parseInt(timeFinishParts[1], 10);

  return {
    id: index,
    url: '',
    title: `${item.profit} $`,
    start: new Date(startYear,  startMonth , startDay , startHour, startMinute),
    end: new Date(finishYear,  finishMonth, finishDay , finishHour, finishMinute),
    allDay: false,
    extendedProps: {
      calendar: item.profit >= 0 ? 'Holiday' : 'Personal',
      description : item.symbol
    }
  }

})

const data: { events: EventType[] } = {events}


// ------------------------------------------------
// GET: Return calendar events
// ------------------------------------------------
mock.onGet('/apps/calendar/events').reply(config => {
  // Get requested calendars as Array
  const { calendars } = config.params

  return [200, data.events.filter(event => calendars.includes(event.extendedProps.calendar))]
})

// ------------------------------------------------
// POST: Add new event
// ------------------------------------------------
mock.onPost('/apps/calendar/add-event').reply(config => {
  // Get event from post data
  const { event } = JSON.parse(config.data).data

  const { length } = data.events
  let lastIndex = 0
  if (length) {
    lastIndex = data.events[length - 1].id
  }
  event.id = lastIndex + 1

  data.events.push(event)

  return [201, { event }]
})

// ------------------------------------------------
// POST: Update Event
// ------------------------------------------------
mock.onPost('/apps/calendar/update-event').reply(config => {
  const eventData = JSON.parse(config.data).data.event

  // Convert Id to number
  eventData.id = Number(eventData.id)

  const event = data.events.find(ev => ev.id === Number(eventData.id))

  if (event) {
    Object.assign(event, eventData)

    return [200, { event }]
  } else {
    return [400, { error: `Event doesn't exist` }]
  }
})

// ------------------------------------------------
// DELETE: Remove Event
// ------------------------------------------------
mock.onDelete('/apps/calendar/remove-event').reply(config => {
  // Get event id from URL
  const { id } = config.params

  // Convert Id to number
  const eventId = Number(id)

  const eventIndex = data.events.findIndex(ev => ev.id === eventId)
  data.events.splice(eventIndex, 1)

  return [200]
})
