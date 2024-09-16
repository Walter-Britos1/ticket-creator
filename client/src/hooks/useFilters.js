import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setStatus, setDifficulty, setCreatedTime } from '@/redux/sliceFilters';

const useFilters = () => {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state.filterStatus.ticketStatus);
  const filterDifficulty = useSelector((state) => state.filterStatus.difficulty);
  const filterCreatedTime = useSelector((state) => state.filterStatus.createdTime);

  const [localFilters, setLocalFilters] = useState({
    status: filterStatus,
    difficulty: filterDifficulty,
    createdTime: filterCreatedTime,
  });

  const handleStatusChange = (event) => {
    setLocalFilters({ ...localFilters, status: event.target.value });
  };

  const handleDifficultyChange = (event) => {
    setLocalFilters({ ...localFilters, difficulty: event.target.value });
  };

  const handleCreatedTimeChange = (event) => {
    setLocalFilters({ ...localFilters, createdTime: event.target.value });
  };

  const applyFilters = () => {
    dispatch(setStatus(localFilters.status));
    dispatch(setDifficulty(localFilters.difficulty));
    dispatch(setCreatedTime(localFilters.createdTime));
  };

  return {
    localFilters,
    handleStatusChange,
    handleDifficultyChange,
    handleCreatedTimeChange,
    applyFilters,
  };
};

export default useFilters;
