import { getEvents, getSingle } from './event-data'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const SINGLE_EVENT = 'SINGLE_EVENT'

export function fetchEvents () {
    return {
        type: FETCH_EVENTS,
        payload: getEvents()
    }
}

export function fetchSingleEvent (month) {
    return {
        type: FETCH_EVENTS,
        payload: getSingle(month)
    }
}
