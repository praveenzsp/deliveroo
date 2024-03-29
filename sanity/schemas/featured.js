import { validation } from "sanity";

export default {
    name : "featured",
    type : 'document',
    title : "Featured Menu Categories",
    fields : [
        {
            name : "name",
            type : "string",
            title : "Featured category name",
            validation : (Rule)=>Rule.required(),
        },
        {
            name : "short_description",
            type : "string",
            title : "Short Description of Featured category",
            validation : (Rule)=>Rule.max(200),
        },
        {
            name : "restaurants",
            type : "array",
            title : "Restaurants",
            of : [{type : "reference", to : [{type : "restaurant"}]}]
        },
    ]
}