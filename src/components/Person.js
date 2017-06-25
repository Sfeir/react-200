import React from 'react';
import Card from './Card';

const Person = ({ person }) => (
  <Card>
    <Card.Avatar photoUrl={person.photo} altText={`photo of ${person.firstname}`} />
    <Card.Title
      mainTitle={<a href={`/person/${person.id}`}>{person.firstname} {person.lastname}</a>}
      subTitle={person.entity}
    />
    <Card.Info icon="email">
      <a href={`mailto:${person.email}`}>{person.email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${person.phone}`}>{person.phone}</a>
    </Card.Info>
    { person.managerId && (
      <Card.Info icon="supervisor_account" desc="manager">
        <a href={`/person/${person.managerId}`}>{person.manager}</a>
      </Card.Info>
    )}
  </Card>  
);

export default Person;