// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPostIt } from '../render-utils.js';

const test = QUnit.test;

test('renderPostIt should return a div with post-it styles', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post-it"><h3>Free Keyboard</h3><p>description</p><p class="contact">test@example.com</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderPostIt({
        title: 'Free Keyboard',
        description: 'description',
        contact: 'test@example.com',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
