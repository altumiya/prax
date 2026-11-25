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
