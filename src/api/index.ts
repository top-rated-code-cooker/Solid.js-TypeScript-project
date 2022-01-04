import { GROUPS_QUERY } from './queries';

export const fetchGroups = (query: any) => fetch(query, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: GROUPS_QUERY})
})
  .then(res => res.json())
  .then(data => data.data.groups)
  .catch(err => {
    console.error(err);
  });
