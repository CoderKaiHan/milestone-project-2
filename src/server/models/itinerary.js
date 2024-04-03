import mongoose from "mongoose"
import Day from "./day.js";

const itinerarySchema = new mongoose.Schema({
    destination: String,
    startDate: Date,
    endDate: Date,
    days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day' }],
    vibe: {
        type: String,
        enum: ['adventure', 'romantic', 'relaxing', 'family-friendly'],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // tells Mongoose that the ObjectId references a document in the User collection.
      required: false // setting to false for build/test/seeding purposes, would want to set to True for production
    }
})

itinerarySchema.methods.createDaysArray = async function() {
    const startDate = this.startDate;
    const endDate = this.endDate;
    
    const days = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const newDay = new Day({ date: currentDate });
      await newDay.save();
      days.push(newDay._id);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    this.days = days;
    await this.save();
  };

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary


// Pre-save hook
//  itinerarySchema.pre('save', function(next) {
//      this.days = [] 
//      // This will clear existing days to avoid duplicates if the document is being updated

//      const start = new Date(this.startDate)
//      const end = new Date(this.endDate)

//      for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
//          this.days.push({ date: new Date(day) }) 
//          // Creates a daySchema subdocument for each day
//      }

//      next() 
//      // Save the document
//  })

// what chatgpt says to do for a virtual hook:

// itinerarySchema.virtual('computedDays').get(function() {
//     const daysArray = [];
//     let currentDate = new Date(this.startDate);
//     const endDate = new Date(this.endDate);

//     while (currentDate <= endDate) {
//         daysArray.push({
//             dayNumber: daysArray.length + 1,
//             date: new Date(currentDate),
//             activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
//         });
//         currentDate.setDate(currentDate.getDate() + 1); // Increment current date by 1 day
//     }

//     return daysArray;
// });

// // Ensure virtuals are included in toJSON output
// itinerarySchema.set('toJSON', { getters: true });

// hook to make days array populate based on dates in itinerary. hook will be called during the create process in controller