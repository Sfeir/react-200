import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

const PersonCard = ({
  id,
  firstname,
  lastname,
  photo,
  entity,
  email,
  phone,
  manager,
  managerId,
  onEdit
}) => (
  <Card actions={ onEdit && [
    <a href="#" onClick={onEdit} key="edit">edit</a>
  ]}>
    <Card.Avatar photoUrl={photo} altText={`photo of ${firstname}`} />
    <Card.Title
      mainTitle={<Link to={`/person/${id}`}>{firstname} {lastname}</Link>}
      subTitle={entity}
    />
    <Card.Info icon="email">
      <a href={`mailto:${email}`}>{email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${phone}`}>{phone}</a>
    </Card.Info>
    { manager && managerId && (
      <Card.Info icon="supervisor_account" desc="manager">
        <Link to={`/person/${managerId}`}>{manager}</Link>
      </Card.Info>
    )}
  </Card>  
);

PersonCard.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  entity: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  manager: PropTypes.string,
  managerId: PropTypes.string,
  onEdit: PropTypes.func
}

export default PersonCard;