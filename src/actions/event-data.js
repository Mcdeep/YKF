import moment from 'moment';

const events = [
    {
        "id": 0,
        "church": "House of Prayer",
        "month": 1,
        "leaders": [{
            "name" : "Z Jokazis",
            "contact": "0827926191"
        }]
    },
    {
        "id": 1,
        "church": "House of Prayer",
        "month": 2,
        "leaders": [{
            "name" : "Z Jokazi",
            "contact": "0827926191"
        }]
    },
    {
        "id": 2,
        "church": "Holy Love",
        "month": 3,
        "leaders": [{
            "name" : "Sister Tendi",
            "contact": "076 183 3718"
        }],
        "coords": {

        }
    },
    {
        "id": 3,
        "church": "For thyne is the Kingdom",
        "month": 4,
        "leaders": null
    },
    {
        "id": 4,
        "church": "RCOM Ext 4",
        "month":5,
        "leaders": null
    },
    {
        "id": 5,
        "church": "Lord's Place",
        "month": 6,
        "leaders": null
    },
    {
        "id": 6,
        "church": "Orphanage Home",
        "month": 7,
        "leaders": null
    },
    {
        "id": 7,
        "church": "RCOM Block V",
        "month":8,
        "leaders": null
    },
    {
        "id": 8,
        "church": "Open Bible Church",
        "month": 9,
        "leaders": null
    },
    {
        "id": 9,
        "church": "God's Family Church",
        "month": 10,
        "leaders": null
    },
    {
        "id": 10,
        "church": "Orphanage Home",
        "month": 11,
        "leaders": null
    }
]
export function getEvents () {
  let eventsData = [];
  events.forEach(evt => {
    evt["date"] = moment([2017,evt.month,1, 13, 0, 0]).startOf('week').add({days:6,hours:13})
    let distance = evt["date"]._d  - new Date();
    if(distance > 0){
        eventsData.push(evt);
    }
  })
    return eventsData
}
export function getSingle (month) {
    const eventList = getEvents();
    return eventList[month];
}
