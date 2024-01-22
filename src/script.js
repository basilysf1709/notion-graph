const { Client } = require('@notionhq/client');
require('dotenv').config({ path: './.env.local' });

const notion = new Client({ auth: process.env.NOTION_API });

// (async () => {
//     const response = await notion.pages.create({
//         "cover": {
//             "type": "external",
//             "external": {
//                 "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
//             }
//         },
//         "icon": {
//             "type": "emoji",
//             "emoji": "🥬"
//         },
//         "parent": {
//             "type": "page_id",
//             "page_id": process.env.NOTION_PAGE_ID
//         },
//         "properties": {
//         },
//         "children": [
//             {
//                 "object": "block",
//                 "heading_2": {
//                     "rich_text": [
//                         {
//                             "text": {
//                                 "content": "Lacinato kale"
//                             }
//                         }
//                     ]
//                 }
//             },
//             {
//                 "object": "block",
//                 "paragraph": {
//                     "rich_text": [
//                         {
//                             "text": {
//                                 "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
//                                 "link": {
//                                     "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
//                                 }
//                             },
//                             "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
//                         }
//                     ],
//                     "color": "default"
//                 }
//             }
//         ]
//     });
//     console.log(response);
// })();

async function createPageWithinPage(parentPageId, pageTitle) {
    try {
      const response = await notion.pages.create({
        parent: { page_id: parentPageId },
        properties: {
          title: {
            title: [
              {
                text: {
                  content: pageTitle,
                },
              },
            ],
          },
        },
      });
      console.log(response);
      console.log("Page created with ID: " + response.id);
    } catch (error) {
      console.error(error.body);
    }
  }
  
  const parentPageId = process.env.NOTION_PAGE_ID;
  const pageTitle = 'W Title fr'; 
  createPageWithinPage(parentPageId, pageTitle);