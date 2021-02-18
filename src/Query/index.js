import React, { useEffect, useState, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import { get, isFunction } from 'lodash';
import { useCompare } from '../utils';

const Query = props => {
  const {
    fetchData: fetchDataFromProps,
    refreshIndex = 0,
    loop = {},
    children,
    onCompleted,
    onError,
    autoFetch = true,
  } = props;
  const loopRef = useRef(loop);
  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async (params = {}) => {
    try {
      params.showLoading !== false && setLoading(true);
      const data = await fetchDataFromProps();
      setLoading(false);
      setResult(data);
      isFunction(onCompleted) && onCompleted();
    } catch (err) {
      isFunction(onCompleted) && onCompleted();
      isFunction(onError) && onError(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch]);

  useEffect(() => {
    if (refreshIndex !== 0) {
      fetchData();
    }
  }, [refreshIndex]);

  const fetchDataLoop = () => {
    clearTimeout(loopRef.current.id);
    loopRef.current.id = setTimeout(() => {
      fetchData({ showLoading: false });
      fetchDataLoop();
    }, get(loop, 'time', 10000));
  };

  useEffect(() => {
    if (loop.enable) {
      fetchDataLoop();
    } else {
      clearTimeout(loopRef.current.id);
    }
    return () => clearTimeout(loopRef.current.id);
  }, [useCompare(loop)]);
  return (
    <Fragment>
      {children({
        data: result,
        loading,
        error,
      })}
    </Fragment>
  );
};

Query.propTypes = {
  children: PropTypes.func,
  fetchData: PropTypes.func,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  refreshIndex: PropTypes.number,
  loop: PropTypes.shape(),
  autoFetch: PropTypes.bool,
};

export default Query;
