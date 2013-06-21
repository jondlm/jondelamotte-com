# A Moment in Time
I recently discovered a JavaScript library that changed the way I see dates. A few weeks ago I was trying to find a simplified way to work with dates in JavaScript, my searching led to [Moment.js](http://momentjs.com/), and one of features had a profound effect on me: simple, relative dates. More on that later. Moment.js allows you to do pretty much everything you ever wanted when working with dates in JavaScript. You can do things like:

- Easily parse custom date strings
- Add or subtract days, weeks, months, years, etc.
- Format dates
- Get dates for simple requests like, "give me the date and time for the beginning of today."
- Tell you how long ago a particular date was from right now. Ex. "3 days ago" or "last Wednesday at 8:00 AM"

Generally when I'm working on a project that has some date to display, I simply list out the entire date and time stamp. The problem with this approach is that it doesn't give the viewer much context. 80% of the time when I'm looking at a date, I want to know what its relation is to me, right now. Moment.js helped me see the value of doing this kind of formating. It also made it dead freakin' simple.

## Top 5 Moment.js Functions
Moment.js' functions typically return either a string or an object that contains the date you are working with, and a bunch of metadata about that date. That object can be recognized and piped through most Moment.js functions. The `_d` property on that object is the JavaScript date literal. If you simply call `moment()` this will return a moment.js for the current date and time, like `new Date()`.

### 5: Date Parsing

```javascript
moment('2013-01-01', 'YYYY-MM-DD')
moment('01/22/2013 18:45', 'MM/DD/YYYY HH:mm')
```

### 4: Adding to Dates

```javascript
moment().add('days', 10)
moment().subtract('weeks', 5)
```

### 3: Humanizing Dates

```javascript
moment().calendar() // -> 'Today at 9:03 AM'
moment().subtract('days', 2).calendar() // -> 'last Tuesday at 8:57 PM'
```

### 2: Start/End Of

```javascript
moment().startOf('day')
moment().endOf('month')
moment().endOf('week')
```

### 1: From Now

```javascript
moment('2013-01-01').fromNow() // -> '6 months ago'
moment().add('minutes', 35).fromNow() // -> 'in 35 minutes'
```
