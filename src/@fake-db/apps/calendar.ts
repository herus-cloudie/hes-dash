// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { EventType } from 'src/types/apps/calendarTypes'

const date = new Date()

// const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

const nextMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)

const prevMonth =
  date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

const data: { events: EventType[] } = {
  events: [
    {
      id: 1,
      url: '',
      title: "80$-",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -3),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -2),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 2,
      url: '',
      title: "280.83$-",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 3,
      url: '',
      title: "45$-",
      allDay: true,
      start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -8),
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 4,
      url: '',
      title: "289$",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
      allDay: true,
      extendedProps: {
        calendar: 'Holiday'
      }
    },
    {
      id: 5,
      url: '',
      title: "250$",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -21),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -20),
      allDay: true,
      extendedProps: {
        calendar: 'Holiday'
      }
    },
    {
      id: 6,
      url: '',
      title: "18.3$",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -6),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -5),
      allDay: true,
      extendedProps: {
        calendar: 'Holiday'
      }
    },
    {
      id: 7,
      url: '',
      title: "28$",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -4),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -3),
      allDay: true,
      extendedProps: {
        calendar: 'Holiday'
      }
    },
    {
      id: 8,
      url: '',
      title: "40.7$-",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -53),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -52),
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 9,
      url: '',
      title: "90.2$-",
      start: nextMonth,
      end: nextMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Personal'
      }
    },
    {
      id: 10,
      url: '',
      title: "80$",
      start: prevMonth,
      end: prevMonth,
      allDay: true,
      extendedProps: {
        calendar: 'Holiday'
      }
    }
  ]
}

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
