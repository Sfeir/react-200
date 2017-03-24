import React, {PropTypes} from 'react';
import Card from './Card';

const Person = ({
  firstname,
  lastname,
  photo,
  entity,
  email,
  phone,
  manager
}) => (
  <Card>
    <Card.Avatar photoUrl={photo} altText={`photo of ${firstname}`} />
    <Card.Title
      mainTitle={<a href="#">{firstname} {lastname}</a>}
      subTitle={entity}
    />
    <Card.Info icon="email">
      <a href={`mailto:${email}`}>{email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${phone}`}>{phone}</a>
    </Card.Info>
    { manager && (
      <Card.Info icon="supervisor_account" desc="manager">
        <a href="#">{manager}</a>
      </Card.Info>
    )}
  </Card>  
);

Person.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  entity: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  manager: PropTypes.string
}

export default Person;