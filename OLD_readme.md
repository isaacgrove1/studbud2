# Development Documentation - IGRO_0534

## Design principles and patterns

### Typography

There are two primary fonts used in the Youth Off the Streets website design: Hackney and Quicksand. Hackney’s grungy and down-to-earth aesthetic makes it an appropriate title font through its ability to relate to its target users. It conveys a sense of authenticity and trustworthiness among donators, volunteers and those who need help. Quicksand is used in bold for smaller titles, and in regular for longer sections of writing. It is a san serif font which is clear and easy on the eye, encouraging the user to engage with the content on the website.

### Colour and Contrast

The colour scheme of the alternating deep blue, and white background for each of the different pages is simple and does not distract the user from the content of the page. Furthermore, the sparse use of orange in the donate section emphasises the importance and impact of donations on the charity through the colour's single use. Contrast has also been used effectively in this website prototype. All text on the deep blue background is formatted as white, and text on the white background is formatted as black to ensure that information is clear and readable on every section of the website.

| ![homepage](./markdown-files/contrast1.png) |
|:--:|
| ![navbar](./markdown-files/contrast2.png) |

### Shape

The decision to implement one, long scrollable page is a purposeful design decision to engage the user and make it easy for them to access the information they’re looking for. The use of such a design allows the user to quickly locate and comprehend information about several aspects of the website. It also removes the disjointed experience of waiting for another page to load or clicking around the wrong pages to locate a specific section of a website. All the iconography in my website was kept to simple black and white images.

### Spacing and alignment

The spacing and alignment was one of the trickier elements of my website to implement effectively. The alignment of elements is kept consistent using divs, lists and sections which style items in groups, rather than individually. However, in the iPhone layout of my website there are certain spacing and alignment issues which I was unable to amend in the CSS or HTML. This includes a white ‘gutter’ on the right, and some inconsistent styling of the input boxes and labels in the iPad and iPhone layout. This is likely caused by the overflow of a div or section, however I was unable to locate it in the code. Another issue in spacing and alignment is the length of the bottom section on the iPhone layout. I was able to readjust its length, however the positioning of other items on the page then became inconsistent and messy. Discounting these details, the spacing and alignment in the Youth Off of the Streets website aimed is designed to be intuitive and appealing.

# 

The purposeful application of these design principles in conjunction with one another was used to implement several design patterns on my website. This is evident through the similar donate, and about us page, using the same colour schemes, fonts layout and alignment pattern with title, paragraph text and image.  

## Further critical reflection of elements

It Is also important to acknowledge some design choices which were amended following the previous iteration of the Youth Off of the Streets website. These decisions arose from user testing with one participant, Matthew, as well as personal reflection on the design. During user testing, Matthew was asked to do the *Think Aloud Protocol* as he navigated to certain locations of the website, and reflect on both the usability and aesthetic of the site.

### User testing
It was decided that the carousal of images on the home page should be abandoned due to some confusion of its function during usability testing. When tasked with ‘reading all the personal stories on the home page’, Matthew was unsure whether to “tap or scroll”. It was also not immediately obvious that the carousel was a dynamic feature of the website. To avoid this confusion, it was decided to simply include the first quote of Katie Brennan. User testing also revealed that the underlined links in the navbar section were “not that clean”. When probed further, Matthew suggested “I’d probably just leave them as normal”. This prompted the removal of the underlines in the navbar, as well as the addition of a hover feature, so that the user is aware that the titles are hyperlinks.

| ![homepage](./markdown-files/homepage.png) |
|:--:|
| <b>Redesigned home page without carousel of stories</b>|

| ![navbar](./markdown-files/navbar.png) |
|:--:|
| <b>Redesigned navigation bar without underlined text</b> |

### Self-reflection
Following critical self-reflection on the previous iteration of my website, it was decided that it was not crucial to list and introduce every key member of the YOTS organisation. As such, only a photo of the founding member, Father Chris O’Reilly and a short statement from him was included in this website prototype. Moreover, another subtle change, was the removal of an ‘other’ donation box, and a replacement of the ‘tick’ with a ‘submit’ button in the donation page. The first of these decisions is to ensure that the minimum amount of donation is $20. This will perhaps encourage those who would normally only donate small change, to donate $20 at the minimum. The second decision to replace the ‘tick’ with a ‘submit’ button is to avoid ambiguity with some users who are unsure as to how to actually donate their selected amount. 

| ![about us](./markdown-files/about-us.png) |
|:--:|
| <b>New 'about us' page, without other members featured in previous iteration</b> |

| ![donation](./markdown-files/donation.png) |
|:--:|
| <b>Redesigned donation options, using submit button</b> |


## References

icon-icons. (2017). [Image]. Retrieved from https://thenounproject.com/term/message

Stockio. (2019). [Image]. Retrieved from https://icon-icons.com/icon/mail/128509

Stockio. (2020). [Image]. Retrieved from https://www.iconfinder.com/icons/1608790/phone_icon

Youth Off The Streets. (2015). Retrieved 12 October 2021, from
https://youthoffthestreets.com.au/
