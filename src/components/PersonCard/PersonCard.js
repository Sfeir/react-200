import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Card';

const PersonCard = ({ person, onEdit }) => (
  <Card
    actions={
      onEdit && [
        <a onClick={onEdit} key="edit">
          edit
        </a>
      ]
    }
  >
    <Card.Avatar
      photoUrl={person.photo}
      altText={`photo of ${person.firstname}`}
    />
    <Card.Title
      mainTitle={
        <Link to={`/person/${person.id}`}>
          {person.firstname} {person.lastname}
        </Link>
      }
      subTitle={person.entity}
    />
    <Card.Info icon="email">
      <a href={`mailto:${person.email}`}>{person.email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${person.phone}`}>{person.phone}</a>
    </Card.Info>
    {person.managerId && (
      <Card.Info icon="supervisor_account" desc="manager">
        <Link to={`/person/${person.managerId}`}>{person.manager}</Link>
      </Card.Info>
    )}
  </Card>
);

PersonCard.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    entity: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    managerId: PropTypes.string,
    manager: PropTypes.string
  }),
  onEdit: PropTypes.func
};

export default PersonCard;
