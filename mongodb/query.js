db.sightings.aggregate([
  { $match: { species_common: "Eastern Bluebird" } },
  { $group: { _id: "$location.coordinates", sightings_count: { $count: {} } } },
]);
