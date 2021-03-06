import { map, without } from 'lodash';

export function processActivities(activities){
  let collapsedActivities = [],
      currentActivity = {
        contact:{}
      };

  activities.forEach((activity, index)=>{
    if (activity.contact.id != currentActivity.contact.id) {
      if (index != 0 ) collapsedActivities.push(currentActivity);
      currentActivity = activity;
    } else {
      if (typeof currentActivity.related == 'undefined')  {
        currentActivity.related = [ activity ]
      } else {
        currentActivity.related.push(activity);
      }
    }
  });

  let withoutShortlist = map(collapsedActivities, (entry) => {
    if (entry.status != 'SHORTLIST') return entry;
  });

  withoutShortlist = without(withoutShortlist, undefined);
  return withoutShortlist;
}


export function generateProfessionsArray(professions){
  let Services = [];

  professions.forEach((profession)=>{
      let Service = {
        name: profession.professions[0].text,
        categories: profession.professions[1].text.split(',')
      }
      Services.push(Service);
  })
  return Services;
}
