import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';

const Mutation = props => {
  const { onSubmit: onSubmitFromProps, children, onCompleted, onError, refetchQuery } = props;
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = await onSubmitFromProps();
      setLoading(false);
      setResult(data);
      isFunction(onCompleted) && onCompleted();
      isFunction(refetchQuery) && refetchQuery();
    } catch (err) {
      isFunction(onCompleted) && onCompleted();
      isFunction(onError) && onError(err);
      setError(err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {children(onSubmit, {
        data: result,
        loading,
        error,
      })}
    </Fragment>
  );
};

Mutation.propTypes = {
  children: PropTypes.func,
  onSubmit: PropTypes.func,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  refetchQuery: PropTypes.func,
};

export default Mutation;
