# Greyscale Sobel filter
## Installation

## Tasks
### Practical
1. Create a frontend application that allows a user to upload an image. Also include a
submit button.
2. Upon clicking the submit button, send the image to the api (Python backend).
3. When the image has been received by the Python backend, convert the image to
greyscale and apply a sobel filter. To convert the image to greyscale and to apply the
sobel filter, you are free to use the library of your choice.
4. Your backend solution should reject any input that is not an image and return an error
message.
5. Return the image with the sobel filter applied to the frontend. The new image should be
visible on the frontend.
6. A user should be able to upload new images on the frontend after receiving a result, thus
repeating steps 2-5.
7. Provide a suitable unit test for your API.
8. Using docker, containerise both the frontend and backend of your solution.
9. Provide a README for installing and running your solution.
### Theory
10. Can you give an example of a frontend test that could be implemented?
11. Describe how we would expand this service to allow video input and output?
12. Give some examples of how we would scale this service?
### Answers to Theory
10. We could implement unit testing using jasmine to test the functions and methods of the application.
11. We could try to find a suitable library in order to filter the image or find out a way to filter each and every frame of the video, combine them and send as output.
