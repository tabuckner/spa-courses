import type { CourseModel } from "../models/course.model";

export const MOCK_COURSES: Array<CourseModel> = [
  {
    id: '3808f02a-1250-4d9b-982b-c44d6efc5347',
    name: 'Window Cleaning',
    prerequisites: []
  },
  {
    id: 'a5af636c-ac4a-4cfa-9016-f167b491deb1',
    name: 'Window Tinting',
    prerequisites: [
      {
        id: '3808f02a-1250-4d9b-982b-c44d6efc5347',
        name: 'Window Cleaning',
        prerequisites: []
      }
    ]
  },
  {
    id: 'b9fe3a89-d8cb-433b-9584-b7fc2ca08ddf',
    name: 'Window Smashing',
    prerequisites: []
  },
  {
    id: 'a57d89cf-3d0a-49c9-bfb4-acbaefff7c80',
    name: 'Window Repair',
    prerequisites: [
      {
        id: 'b9fe3a89-d8cb-433b-9584-b7fc2ca08ddf',
        name: 'Window Smashing',
        prerequisites: []
      }
    ]
  },
];
