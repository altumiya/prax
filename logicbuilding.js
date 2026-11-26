/*
MERN DEVELOPER TRAINING — DAY 1 & DAY 2
LOGIC BUILDING + BACKEND FUNDAMENTALS
=========================================================
DAY 1 — CLIENT, SERVER, DATABASE & VALIDATION
=========================================================

1. HOW A WEB APPLICATION WORKS

A web application generally has three major parts:

Frontend (Client)
    |
    | Sends HTTP request
    v
Backend (Server)
    |
    | Processes request and communicates with database
    v
Database
    |
    | Returns data
    v
Backend
    |
    | Sends HTTP response
    v
Frontend
    |
    | Updates the UI


Example: Jungle Wild Safari Enquiry Form

User fills:
    Name
    Email
    Mobile
    Safari destination

React collects the data.
React validates the data.
React sends the request to Express.
Express receives and validates the data again.
Express communicates with MongoDB.
MongoDB stores the data.
Express sends a response.
React displays the result to the user.

---------------------------------------------------------
2. FRONTEND RESPONSIBILITY
---------------------------------------------------------

Frontend is responsible for:

- Displaying the user interface.
- Collecting user input.
- Handling user interactions.
- Basic form validation.
- Sending API requests.
- Displaying loading states.
- Displaying success and error messages.
- Updating the UI according to the server response.

Frontend should not directly connect to MongoDB.

Why?

Because database credentials and sensitive business logic
should not be exposed to the browser.

Example:

User enters an invalid email.

React can detect it before sending the request.

This improves the user experience because the user receives
immediate feedback without waiting for the server.

---------------------------------------------------------
3. BACKEND RESPONSIBILITY
---------------------------------------------------------

Backend is responsible for:

- Receiving requests.
- Validating incoming data.
- Authentication.
- Authorization.
- Business logic.
- Communicating with the database.
- Handling errors.
- Returning HTTP responses.

Frontend validation is not enough for security.

Why?

A user can bypass React and send a request directly
using Postman, curl, or another application.

Therefore, backend validation is mandatory.

---------------------------------------------------------
4. FRONTEND VALIDATION VS BACKEND VALIDATION
---------------------------------------------------------

Frontend validation:

Purpose:
    Improve user experience.

Example:
    Check if name is empty.
    Check if email format is valid.
    Check if phone number has the required digits.

Backend validation:

Purpose:
    Protect the server and database.
    Maintain data integrity.
    Enforce business rules.

Example:
    Reject empty names.
    Reject invalid email addresses.
    Reject invalid booking dates.
    Reject unauthorized requests.

IMPORTANT:

Frontend validation is for convenience.

Backend validation is the actual security boundary
for accepting or rejecting data.

---------------------------------------------------------
5. COMPLETE LOGIN REQUEST FLOW
---------------------------------------------------------

Step 1:
    User enters email and password.

Step 2:
    React collects the credentials.

Step 3:
    React performs basic validation.

Step 4:
    React sends a POST request to the backend.

Step 5:
    Express receives the request.

Step 6:
    Backend validates the incoming data.

Step 7:
    Backend searches for the user in MongoDB.

Step 8:
    Backend compares the entered password with
    the stored password hash using bcrypt.

Step 9:
    If credentials are valid, the backend creates
    an authentication session or token.

Step 10:
    Backend sends the response to React.

Step 11:
    React updates the UI and redirects the user
    according to the authentication result.

---------------------------------------------------------
6. PASSWORD HASHING
---------------------------------------------------------

Passwords should not be stored as plain text.

Incorrect:

{
    email: "user@example.com",
    password: "mypassword123"
}

Correct approach:

Store a password hash.

bcrypt hashes the password before storing it.

During login:

    User enters password.
            |
            v
    bcrypt compares entered password
    with stored password hash.
            |
            v
    Password matches?
       /       \
     YES       NO
      |         |
   Login      Reject
   allowed    login


IMPORTANT:

Hashing is not encryption.

Encryption can generally be reversed using a key.

Password hashing is designed to be one-way.

bcrypt does not decrypt the stored password.

---------------------------------------------------------
7. DATABASE RESPONSIBILITY
---------------------------------------------------------

MongoDB is responsible for storing and retrieving data.

Example enquiry:

{
    name: "Rahul",
    email: "rahul@example.com",
    destination: "Ranthambore",
    status: "pending"
}

MongoDB does not independently handle the entire
application workflow.

Express controls the application logic and decides
when and how database operations should occur.

---------------------------------------------------------
8. ERROR HANDLING
---------------------------------------------------------

An error can occur at different levels.

Frontend:
    Invalid form data.
    Network failure.
    Unexpected response.

Backend:
    Invalid request.
    Authentication failure.
    Business logic failure.
    Database failure.

Database:
    Connection failure.
    Query failure.
    Duplicate key.
    Validation failure.

The backend should handle errors and return an
appropriate response instead of crashing unexpectedly.

---------------------------------------------------------
9. HTTP RESPONSE STATUS CODES
---------------------------------------------------------

200 OK

Request successfully processed.

Example:
    Fetch enquiries.
    Update an enquiry successfully.


201 CREATED

A new resource was successfully created.

Example:
    New enquiry stored in MongoDB.


400 BAD REQUEST

Request contains invalid data.

Example:
    Missing name.
    Invalid email.
    Invalid enquiry ID format.


401 UNAUTHORIZED

Authentication is missing or invalid.

Example:
    User is not logged in.


403 FORBIDDEN

User is authenticated but does not have permission.

Example:
    Normal user attempts to access admin functionality.


404 NOT FOUND

Requested resource does not exist.

Example:
    Enquiry ID does not exist in MongoDB.


500 INTERNAL SERVER ERROR

Unexpected server-side failure.

Example:
    Unexpected database or application error.


IMPORTANT:

The status code should represent the actual outcome
of the operation.

=========================================================
DAY 1 — REQUEST FLOW LOGIC
=========================================================

USER
 |
 | Fills form
 v
REACT
 |
 | Frontend validation
 |
 | If invalid:
 |     Show validation message
 |     Stop request
 |
 | If valid:
 |     Send HTTP request
 v
EXPRESS
 |
 | Backend validation
 |
 | If invalid:
 |     Return 400
 |
 | If valid:
 |     Execute business logic
 v
MONGODB
 |
 | Store or retrieve data
 v
EXPRESS
 |
 | Return HTTP response
 v
REACT
 |
 | Update UI
 |
 | Display success/error

=========================================================
DAY 2 — HTTP, REST API & DEBUGGING
=========================================================
---------------------------------------------------------
1. WHAT IS HTTP?
---------------------------------------------------------

HTTP stands for Hypertext Transfer Protocol.

It is a communication protocol used by clients and
servers to exchange information.

Example:

React
    |
    | HTTP Request
    v
Express Server
    |
    | HTTP Response
    v
React


HTTPS is HTTP secured using TLS.

HTTPS helps protect communication from being read
or modified by unauthorized parties while in transit.

---------------------------------------------------------
2. WHAT IS AN API?
---------------------------------------------------------

API stands for Application Programming Interface.

An API provides a way for different software systems
to communicate with each other.

In a MERN application:

React communicates with Express through APIs.

React does not directly access MongoDB.

Example:

React:
    Axios.get("/api/enquiries")

Express:
    Receives the request.
    Processes it.
    Communicates with MongoDB.
    Returns the response.

---------------------------------------------------------
3. WHAT IS A REST API?
---------------------------------------------------------

REST is an architectural style used to design APIs.

A REST-style API commonly uses:

    HTTP methods
    Resource-based URLs
    HTTP status codes
    Request and response data

Example resource:

Enquiries

Possible endpoints:

GET     /api/enquiries
POST    /api/enquiries
GET     /api/enquiries/:id
PUT     /api/enquiries/:id
PATCH   /api/enquiries/:id
DELETE  /api/enquiries/:id

---------------------------------------------------------
4. HTTP METHODS
---------------------------------------------------------

GET

Purpose:
    Retrieve data.

Example:

GET /api/enquiries

Logic:

    Client requests enquiries.
            |
            v
    Express receives GET request.
            |
            v
    Express queries MongoDB.
            |
            v
    MongoDB returns enquiries.
            |
            v
    Express sends response.
            |
            v
    React displays enquiries.


POST

Purpose:
    Create a new resource.

Example:

POST /api/enquiries

Logic:

    Client sends enquiry data.
            |
            v
    Backend validates data.
            |
            v
    Backend creates enquiry.
            |
            v
    MongoDB stores enquiry.
            |
            v
    Backend returns 201 Created.


PUT

Purpose:
    Generally replace an existing resource.

Example:

PUT /api/enquiries/123

The client generally sends the complete representation
of the resource to replace.

Think:

    Replace the existing resource.


PATCH

Purpose:
    Partially update an existing resource.

Example:

PATCH /api/enquiries/123

Request body:

{
    status: "confirmed"
}

Logic:

    Find enquiry.
            |
            v
    Update only the status.
            |
            v
    Return updated enquiry.


DELETE

Purpose:
    Delete a resource.

Example:

DELETE /api/enquiries/123

Logic:

    Find enquiry.
            |
            v
    Delete enquiry.
            |
            v
    Return appropriate response.

---------------------------------------------------------
5. PUT VS PATCH
---------------------------------------------------------

PUT:

Generally replaces the complete resource.

PATCH:

Updates selected fields.

Example existing enquiry:

{
    name: "Rahul",
    email: "rahul@example.com",
    status: "pending"
}


PUT:

Client may send:

{
    name: "Rahul",
    email: "rahul@example.com",
    status: "confirmed"
}

The resource is generally replaced by the
provided representation.


PATCH:

Client sends:

{
    status: "confirmed"
}

Only the status needs to be changed.


Memory trick:

PUT = Replace.

PATCH = Modify a part.

---------------------------------------------------------
6. REQUEST ANATOMY
---------------------------------------------------------

An HTTP request may contain:

1. Method
2. URL
3. Headers
4. Body

Example:

POST /api/enquiries

Headers:

Content-Type: application/json

Body:

{
    name: "Rahul",
    email: "rahul@example.com"
}


Method:

    What action is being requested?


URL:

    Which resource is being accessed?


Headers:

    Additional information about the request.


Body:

    Data being sent to the server.

---------------------------------------------------------
7. RESPONSE ANATOMY
---------------------------------------------------------

An HTTP response contains:

1. Status code
2. Headers
3. Body

Example:

Status:

    201 Created

Body:

{
    message: "Enquiry created successfully",
    enquiry: {
        name: "Rahul",
        email: "rahul@example.com"
    }
}


Status code:

    Communicates the outcome of the request.


Response body:

    Contains information returned to the client.

---------------------------------------------------------
8. COMMON HTTP STATUS CODES
---------------------------------------------------------

200 = OK

Request successfully processed.


201 = Created

New resource created successfully.


204 = No Content

Request successfully processed.
No response body is returned.


400 = Bad Request

Invalid request data.


401 = Unauthorized

Authentication missing or invalid.


403 = Forbidden

Access is not permitted.


404 = Not Found

Requested resource does not exist.


409 = Conflict

Request conflicts with existing data or state.

Example:

Duplicate email when uniqueness is required.


500 = Internal Server Error

Unexpected server-side error.


502 = Bad Gateway

Gateway received an invalid response from an upstream
server.


503 = Service Unavailable

Service temporarily unavailable.


504 = Gateway Timeout

Gateway did not receive a timely response from
an upstream server.

---------------------------------------------------------
9. IMPORTANT STATUS CODE LOGIC
---------------------------------------------------------

Example:

User tries to update a non-existing enquiry.

Request:

PATCH /api/enquiries/123


If the enquiry does not exist:

    Return 404 NOT FOUND.


If the ID format is invalid:

    Return 400 BAD REQUEST.


If the enquiry exists and is successfully updated:

    Return 200 OK.


If the server encounters an unexpected error:

    Return 500 INTERNAL SERVER ERROR.


IMPORTANT:

A request being technically valid does not mean
the requested resource exists.

A 404 is not automatically a frontend bug.

It may simply mean the requested resource
does not exist.

=========================================================
DAY 2 — DEBUGGING LOGIC
=========================================================
---------------------------------------------------------
1. HOW A DEVELOPER SHOULD DEBUG
---------------------------------------------------------

Do not immediately start changing code.

Follow this process:

STEP 1 — REPRODUCE

    Can you consistently reproduce the issue?

STEP 2 — OBSERVE

    What exactly is happening?

    What did you expect?

    What actually happened?

STEP 3 — INSPECT

    Check browser console.
    Check Network tab.
    Check request URL.
    Check request method.
    Check request payload.
    Check response status.
    Check response body.
    Check backend terminal.
    Check database.

STEP 4 — IDENTIFY

    Find the actual cause.

STEP 5 — FIX

    Correct the cause instead of hiding the symptom.

STEP 6 — RETEST

    Test the successful case.

    Test the failed case.

    Test edge cases.

    Ensure the fix did not break another feature.


MEMORY:

    Reproduce
        |
        v
    Observe
        |
        v
    Inspect
        |
        v
    Identify
        |
        v
    Fix
        |
        v
    Retest

---------------------------------------------------------
2. DEBUGGING A 500 ERROR
---------------------------------------------------------

Suppose React displays:

    Internal Server Error


Do not immediately assume React is responsible.

Check:

1. Browser Network tab.
2. Request URL.
3. HTTP method.
4. Request payload.
5. Response body.
6. Express route.
7. Middleware.
8. Controller logic.
9. Database connection.
10. MongoDB query.
11. Backend terminal logs.

A 500 response means the server reports an
unexpected failure.

The actual cause may be:

    Incorrect code.
    Incorrect configuration.
    Database failure.
    Unexpected data.
    Missing error handling.

---------------------------------------------------------
3. BUG VS ERROR RESPONSE
---------------------------------------------------------

BUG:

    A defect in code, logic, or configuration.

Example:

    Developer forgets to check whether the enquiry
    exists before returning success.

ERROR RESPONSE:

    An API response communicating that an operation
    failed or could not be completed.

Example:

    User enters an invalid email.

    Backend returns 400 Bad Request.

This does not necessarily mean the application
has a bug.

The application may be behaving correctly.

=========================================================
DAY 2 — LOGIC BUILDING EXERCISE
=========================================================

SCENARIO:

Admin wants to update an enquiry status.

Existing backend code:

app.patch("/api/enquiries/:id", async (req, res) => {

    const enquiry = await Enquiry.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    );

    res.status(200).json(enquiry);

});

---------------------------------------------------------
WHAT IS WRONG WITH THIS CODE?
---------------------------------------------------------

PROBLEM 1:

    No try/catch.

    A database error may cause an unhandled failure
    or prevent a proper response from being returned.


PROBLEM 2:

    No validation of the ID.

    An invalid MongoDB ObjectId may cause an error.


PROBLEM 3:

    No validation of status.

    Client may send an unexpected status.

    Example:

    {
        status: "banana"
    }


PROBLEM 4:

    No check whether enquiry exists.

    findByIdAndUpdate() may return null.


PROBLEM 5:

    Code always sends 200.

    Even when enquiry is null.

    Therefore frontend may mistakenly believe
    the enquiry was updated successfully.

---------------------------------------------------------
CORRECT LOGIC
---------------------------------------------------------

1. Receive ID from URL.

2. Receive status from request body.

3. Validate ID format.

4. Validate status.

5. Find and update enquiry.

6. Check whether enquiry exists.

7. If no enquiry exists:
       Return 404.

8. If enquiry exists and is updated:
       Return 200.

9. If unexpected error occurs:
       Return 500.

---------------------------------------------------------
IMPROVED CODE
---------------------------------------------------------

app.patch("/api/enquiries/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const { status } = req.body;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid enquiry ID"
            });
        }

        // Validate status
        const allowedStatuses = [
            "pending",
            "confirmed",
            "cancelled"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        // Update enquiry
        const enquiry = await Enquiry.findByIdAndUpdate(
            id,
            { status },
            {
                new: true,
                runValidators: true
            }
        );

        // Check whether enquiry exists
        if (!enquiry) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        // Successful update
        return res.status(200).json({
            message: "Enquiry updated successfully",
            enquiry
        });

    } catch (error) {

        console.error("Update enquiry error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });

    }

});

---------------------------------------------------------
WHY IS THIS CODE BETTER?
---------------------------------------------------------

It validates the input.

It checks the ID format.

It checks the allowed status.

It enables Mongoose update validators.

It checks whether the enquiry actually exists.

It returns 404 when the resource is missing.

It returns 200 only when the update succeeds.

It handles unexpected errors.

IMPORTANT:

    No exception does not automatically mean
    the business operation succeeded.

    Always verify the result of the operation.

=========================================================
DAY 2 — INTERVIEW ANSWER
=========================================================

QUESTION:

Explain how your MERN application handles an enquiry.


ANSWER:

"When a user submits an enquiry, React collects
the form data and performs basic frontend validation.

If the data is valid, React sends a POST request
to the Express backend.

The backend independently validates the incoming data
and executes the business logic.

If the enquiry is valid, Express stores it in MongoDB.

After successful creation, the backend returns
a 201 Created response.

React then handles the response and displays
a success message to the user.

If any validation or server-side error occurs,
the backend returns an appropriate status code
and React displays the relevant error message."

=========================================================
DAY 1 & DAY 2 — IMPORTANT DEVELOPER MINDSET
=========================================================
1. Never trust frontend validation alone.

2. Never expose database credentials in frontend code.

3. Never assume a request succeeded just because
   the frontend sent it.

4. Always inspect the server response.

5. Use appropriate HTTP methods.

6. Use appropriate status codes.

7. Validate data before database operations.

8. Check whether a resource exists before
   reporting a successful update or deletion.

9. Do not blindly change code when debugging.

10. Reproduce the issue before fixing it.

11. Understand WHY the code is failing.

12. Retest after fixing the issue.

13. An API response and a code bug are not
    necessarily the same thing.

14. A valid request may still return 404 if
    the requested resource does not exist.

15. A 200 response should reflect the actual
    successful outcome of the operation.
*/
/*
DAY 3 — ASYNCHRONOUS JAVASCRIPT
TRAINING: SOUND LIKE AN EXPERIENCED MERN DEVELOPER

OBJECTIVES
------------------------------------------------------------
1. Understand synchronous vs asynchronous execution.
2. Understand the Call Stack.
3. Understand setTimeout().
4. Understand the Event Loop.
5. Understand Promises.
6. Understand async/await.
7. Understand Microtask Queue.
8. Understand how Node.js handles multiple requests.
9. Debug asynchronous code logically.
10. Explain asynchronous JavaScript confidently in interviews.

1. SYNCHRONOUS JAVASCRIPT
Synchronous code executes one statement at a time, in order.
The next statement waits for the current statement to finish.
Example:

console.log("A");
console.log("B");
console.log("C");

Output:
A
B
C

Execution:
1. A executes.
2. B executes.
3. C executes.

Think of it like standing in a queue.

Person 1 finishes.
Person 2 gets their turn.
Person 3 gets their turn.

Nobody skips ahead.

2. ASYNCHRONOUS JAVASCRIPT
Asynchronous operations allow JavaScript to initiate an operation
that may take time without blocking the current JavaScript
execution while waiting for its completion.

Examples:

- MongoDB database queries
- API requests
- Reading files
- Network requests
- Sending emails

Example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

Output:

A
C
B

WHY?

1. A executes immediately.
2. setTimeout schedules its callback.
3. JavaScript continues executing.
4. C executes.
5. B executes when the callback becomes eligible to run
   and the JavaScript execution can process it.

IMPORTANT:

JavaScript does not need to sit idle while waiting
for asynchronous operations.

3. THE CALL STACK

The Call Stack keeps track of function calls during execution.

When a function is called:
    It is PUSHED onto the Call Stack.

When a function finishes:
    It is POPPED from the Call Stack.

Terminology:

PUSH:
Add a function to the Call Stack.

POP:
Remove a completed function from the Call Stack.

STACK FRAME:
The execution context associated with a function call.


Example:

function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();


Execution:

1. first() enters the Call Stack.
2. first() calls second().
3. second() enters the Call Stack.
4. second() calls third().
5. third() enters the Call Stack.
6. third() finishes and is removed.
7. second() finishes and is removed.
8. first() finishes and is removed.


Output:

First
Second
Third


Call Stack visualization:

When first() executes:

    first()
    Global


When second() executes:

    second()
    first()
    Global


When third() executes:

    third()
    second()
    first()
    Global


After third() finishes:

    second()
    first()
    Global


After second() finishes:

    first()
    Global


After first() finishes:

    Global


IMPORTANT:

Long-running synchronous JavaScript occupies the Call Stack
and can prevent the Event Loop from processing callbacks
until that execution finishes.


4. SETTIMEOUT() AND THE EVENT LOOP

Example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

Output:

A
C
B


WHY DOES B NOT EXECUTE IMMEDIATELY?

Because setTimeout(..., 0) does not mean execute immediately.

It means the callback becomes eligible after the timer threshold,
but it still needs to wait until the current synchronous execution
finishes and the runtime can process the callback.

Execution:

1. A executes.
2. The timer callback is scheduled.
3. C executes.
4. Synchronous execution completes.
5. The callback becomes eligible to execute.
6. B executes.


EVENT LOOP — BASIC MENTAL MODEL

Synchronous JavaScript
        |
        v
    Call Stack
        |
        v
Current synchronous execution finishes
        |
        v
Runtime coordinates pending callbacks
        |
        v
Callback becomes eligible to execute
        |
        v
Callback executes when the stack
and runtime scheduling allow it


IMPORTANT:

0 milliseconds does not mean zero execution delay.


5. PROMISES
A Promise represents the eventual outcome of an asynchronous
operation.

A Promise has 3 states:

1. PENDING
   The operation is still in progress.

2. FULFILLED
   The operation completed successfully.

3. REJECTED
   The operation failed.


Example:

const enquiryPromise = Enquiry.findById("123");

Enquiry.findById() returns a Promise.

We don't immediately know:

- Whether the enquiry will be found.
- Whether MongoDB will respond.
- Whether the database connection will fail.


PROMISE HANDLING:

Enquiry.findById("123")
    .then((enquiry) => {
        console.log(enquiry);
    })
    .catch((error) => {
        console.log(error);
    });


.then()

Handles successful Promise fulfillment.

.catch()

Handles Promise rejection.

.finally()

Executes after the Promise settles,
whether fulfilled or rejected.


PROMISE FLOW:

Database operation starts
          |
          v
       Promise
          |
      +---+---+
      |       |
   Success   Failure
      |       |
   .then()  .catch()


6. ASYNC AND AWAIT

async/await makes asynchronous code easier to read
by allowing us to write it in a sequential style.

WITHOUT ASYNC/AWAIT:

Enquiry.findById("123")
    .then((enquiry) => {
        console.log(enquiry);
    })
    .catch((error) => {
        console.log(error);
    });


WITH ASYNC/AWAIT:

async function getEnquiry() {

    try {

        const enquiry = await Enquiry.findById("123");

        console.log(enquiry);

    } catch (error) {

        console.log(error);

    }

}

getEnquiry();


ASYNC:

Declares an asynchronous function.

An async function returns a Promise.


AWAIT:

Waits for the awaited Promise to settle before continuing
the execution of that async function.

It does not freeze the entire Node.js server.

While an asynchronous operation is pending,
Node.js can make progress on other eligible work.


TRY:

Contains the code that may result in an error.


CATCH:

Handles errors when execution inside try throws,
including rejection of an awaited Promise.


IMPORTANT:

await does not block the entire Node.js server.

It suspends the progress of the current async function
at the await expression while the awaited operation is pending.


7. PROMISE MICROTASK QUEUE

Example:

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

Output:

Start
End
Promise


WHY?

1. Start executes immediately.
2. The Promise callback is scheduled as a microtask.
3. End executes immediately.
4. Synchronous execution completes.
5. JavaScript processes the pending Promise microtask.
6. Promise executes.


QUEUE DIFFERENCE:

Synchronous code:
    Call Stack

Promise callbacks:
    Microtask Queue

Timer callbacks:
    Timer/task callback scheduling


IMPORTANT:

Promise callbacks such as .then() are scheduled as microtasks.

In this example, Promise microtasks are processed before
timer callbacks once the synchronous execution completes.


8. ASYNC VS SETTIMEOUT

Example:

console.log("A");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("B");

Output:

A
B
Promise
Timer

WHY?

1. A executes synchronously.
2. Timer callback is scheduled.
3. Promise callback is scheduled as a microtask.
4. B executes synchronously.
5. Synchronous code finishes.
6. Promise microtask executes.
7. Timer callback executes when eligible.

RULE:

Synchronous code executes first.

Promise microtasks are processed before timer callbacks
in this example.

9. REAL MERN DEVELOPER EXAMPLE

PROJECT: JUNGLE WILD SAFARI

Admin wants to update an enquiry's status.

Example:

app.patch("/api/enquiries/:id", async (req, res) => {

    try {

        const enquiry = await Enquiry.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        if (!enquiry) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        return res.status(200).json({
            message: "Enquiry updated successfully",
            enquiry
        });

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        });

    }

});


DEVELOPER THINKING:

When I see:

const enquiry = await Enquiry.findByIdAndUpdate(...);


I should think:

1. This is a database operation.
2. The database response may take time.
3. The operation returns a Promise.
4. await waits for the Promise to settle.
5. If successful, the result is assigned to enquiry.
6. If the Promise rejects, execution enters catch.
7. If the result is null, no matching document was found.
8. I should check the result before sending success.
9. I should return the appropriate HTTP response.
10. I should never send success blindly.

10. HOW NODE.JS HANDLES MULTIPLE REQUESTS

Suppose 3 users send requests at the same time.

USER A:
Requests safari information.

USER B:
Submits an enquiry.

USER C:
Requests blog posts.


Node.js doesn't have to wait for User A's database response
before it can start making progress on User B's request.

Node.js uses an event-driven, non-blocking I/O model.

When a request initiates an asynchronous database operation:

1. Node.js initiates the database operation.
2. The operation waits for the external I/O response.
3. JavaScript can make progress on other eligible work.
4. Other requests can be processed.
5. When the database operation completes,
   the relevant continuation can resume.
6. The response can then be sent.

EXAMPLE:

app.get("/parks", async (req, res) => {

    const parks = await Park.find();

    res.json(parks);

});

app.post("/enquiry", async (req, res) => {

    const enquiry = await Enquiry.create(req.body);

    res.status(201).json(enquiry);

});

If /parks is waiting for MongoDB,
Node.js can continue making progress on other requests.

IMPORTANT:
Node.js is not unlimited.
CPU-intensive synchronous code can block the Event Loop
and delay other requests.

INTERVIEW ANSWER:

Node.js uses an event-driven, non-blocking I/O model.
When a request initiates a database operation,
Node.js doesn't need to block the entire server
while waiting for the database response.

It can continue making progress on other requests
and resume the relevant operation when the database
response becomes available.

This allows Node.js to handle concurrent I/O efficiently.

11. ASYNC DEBUGGING CHECKLIST

When an asynchronous operation fails,
do not randomly change the code.

Check the following:

1. Is the function actually being called?

2. Is the Promise returned correctly?

3. Is the Promise awaited where required?

4. Is the asynchronous operation completing?

5. Is the response data correct?

6. Is the error being caught?

7. Is the response being sent at the correct time?

8. Are multiple responses being sent?

9. Is synchronous blocking code delaying execution?

10. Is the actual result different from what I expected?


COMMON ASYNC BUGS:

BUG 1:
Missing await

Result:
Code may continue before the Promise settles.

BUG 2:
Missing return

Result:
The caller may not receive the expected result.

BUG 3:
Missing try/catch

Result:
Errors may not be handled as intended.

BUG 4:
Incorrect Promise chain

Result:
Data or errors may be handled incorrectly.

BUG 5:
Sending response too early

Result:
Frontend may receive incorrect or incomplete data.

BUG 6:
Sending response twice

Result:
Express may throw:

Cannot set headers after they are sent

BUG 7:
Blocking synchronous code

Result:
Other requests may be delayed.

12. DEBUGGING A REAL API

BUGGY CODE:

app.get("/api/parks", async (req, res) => {

    const parks = Park.find();

    res.status(200).json(parks);

});


PROBLEM:

Park.find() returns a Promise.

Because await is missing,
parks contains the Promise instead of the resolved park data.

The frontend may receive the wrong data.

IMPORTANT:

This does not necessarily throw a TypeError.

The code may execute successfully
but still produce incorrect output.

NOT EVERY BUG CAUSES AN EXCEPTION.


CORRECT CODE:

app.get("/api/parks", async (req, res) => {

    try {

        const parks = await Park.find();

        return res.status(200).json(parks);

    } catch (error) {

        console.error("Fetch parks error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });

    }

});

WHY DOES await FIX IT?

const parks = await Park.find();

If successful:

parks = [park1, park2, park3];

If the operation rejects:

Execution enters the catch block.


DEBUGGING PRINCIPLE:

A program can run without throwing an error
and still produce the wrong result.

Always inspect the actual value returned.


13. DAY 3 EXERCISE 1 — OUTPUT PREDICTION

CODE:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");


CORRECT OUTPUT:

A
C
E
B
D


WHY?

A, C, E are synchronous.

B and D are timer callbacks.

Both callbacks are scheduled.

After synchronous execution completes,
the callbacks execute in their scheduling order here.

B was scheduled before D.


MY SCORE:

10/10

ASSESSMENT:

Excellent output prediction.

14. DAY 3 EXERCISE 2 — CALL STACK

CODE:

function start() {
    console.log("1");
    process();
}

function process() {
    console.log("2");
    finish();
}

function finish() {
    console.log("3");
}

start();

console.log("4");


CORRECT OUTPUT:

1
2
3
4


CALL STACK:

start()
    |
    v
process()
    |
    v
finish()


finish() completes first.

Then process() completes.

Then start() completes.

Finally, console.log("4") executes.


MY SCORE:

7/10


WEAKNESS:

Output prediction was correct.

But the explanation of the Call Stack
needed more precision.


CORRECT TERMINOLOGY:

JavaScript executes function calls using the Call Stack.

When a function is called,
its execution context is pushed onto the stack.

When the function completes,
it is popped off the stack.


15. DAY 3 EXERCISE 3 — PROMISE LOGIC

CODE:

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


CORRECT OUTPUT:

Start
End
Promise

WHY?

The Promise callback is scheduled as a microtask.

Synchronous code continues executing first.

After the synchronous execution finishes,
the Promise microtask is processed.


MY SCORE:

8/10


WEAKNESS:

The logic was correct.

I need to understand the Microtask Queue
instead of simply saying:

"Promises are asynchronous."

16. DAY 3 EXERCISE 4 — DEBUGGING

BUGGY CODE:

app.get("/api/parks", async (req, res) => {

    const parks = Park.find();

    res.status(200).json(parks);

});


BUG:

Missing await.


WHY?

Park.find() returns a Promise.

Without await,
parks contains the Promise instead of the resolved data.


FIX:

const parks = await Park.find();


ERROR HANDLING:

try {

    const parks = await Park.find();

    return res.status(200).json(parks);

} catch (error) {

    console.error(error);

    return res.status(500).json({
        message: "Internal server error"
    });

}

MY SCORE:

8.5/10

STRENGTH:

I identified the practical fix.

WEAKNESS:

I incorrectly assumed the missing await
would necessarily throw a TypeError.

REMEMBER:

Sometimes code doesn't crash.

It simply returns the wrong result.

17. DAY 3 EXERCISE 5 — INTERVIEW ANSWER

QUESTION:

How does Node.js handle multiple incoming requests
when it is waiting for a database response?

MY ORIGINAL ANSWER:

Node.js uses an event-driven model instead of blocking.
The code continues while waiting for the database response.

MY SCORE:

8/10


INTERVIEW-READY ANSWER:

Node.js uses an event-driven, non-blocking I/O model.

When a request initiates a database operation,
Node.js doesn't need to block the entire server
while waiting for the database response.

It can continue processing other requests
and resume the relevant operation
when the database response becomes available.

This allows it to handle concurrent I/O efficiently.

18. MY DAY 3 SCORECARD

Output Prediction:
10/10

Call Stack:
7/10

Promises:
8/10

Async Debugging:
8.5/10

Interview Communication:
8/10

OVERALL:

8.3/10


RESULT:

PASSED.


19. THREE MISTAKES I MUST ELIMINATE

MISTAKE 1:

Saying:

"JavaScript runs on stack references."


CORRECT:

JavaScript executes function calls using the Call Stack.


MISTAKE 2:

Assuming every bug throws an error.

CORRECT:

A program can execute without throwing an exception
and still produce incorrect results.

MISTAKE 3:

Giving vague explanations such as:

"Because it's asynchronous."

CORRECT:

Explain precisely:

- What executes synchronously.
- What operation is initiated.
- What is waiting.
- What happens next.
- When the callback or continuation can execute.

20. DAY 3 FINAL REVISION
SYNCHRONOUS:

Code executes sequentially.
The next statement waits for the current statement.

ASYNCHRONOUS:

Operations can be initiated without blocking JavaScript
while waiting for completion.

CALL STACK:

Tracks active function calls.

PUSH:

Adds a function call to the stack.

POP:

Removes a completed function call.

EVENT LOOP:

Coordinates the processing of eligible asynchronous callbacks
after synchronous execution.

PROMISE:

Represents the eventual outcome of an asynchronous operation.

PROMISE STATES:

Pending
Fulfilled
Rejected

.then():

Handles fulfillment.

.catch():

Handles rejection.

.finally():

Executes after the Promise settles.

ASYNC:

Declares an asynchronous function.
An async function returns a Promise.

AWAIT:

Waits for an awaited Promise to settle
within the async function.

It does not block the entire Node.js server.

MICROTASKS:

Promise callbacks such as .then()
are scheduled as microtasks.

NODE.JS:

Uses an event-driven, non-blocking I/O model.

It can make progress on other requests
while asynchronous I/O is pending.

DEBUGGING:

Do not assume the code crashed.

Inspect the actual value.

A Promise is not the same as its resolved value.

Missing await may cause incorrect output
without throwing an error.

21. HOW I SHOULD THINK DURING INTERVIEWS

When I see:

await Model.find();

I should think:

1. This is an asynchronous database operation.
2. It returns a Promise.
3. await waits for the Promise to settle.
4. The async function pauses at this point.
5. Node.js can make progress on other eligible work.
6. When the Promise settles, the function resumes.
7. If successful, I receive the resolved data.
8. If rejected, I handle the error.
9. I verify the result before sending the response.

When I see:

setTimeout();

I should think:

1. The callback is being scheduled.
2. It does not execute immediately.
3. Synchronous code continues.
4. The callback becomes eligible after the timer threshold.
5. It executes when the runtime can process it.

When I see:

Promise.then();

I should think:

1. The Promise callback is scheduled as a microtask.
2. Synchronous code executes first.
3. The microtask is processed after synchronous execution.

*/
