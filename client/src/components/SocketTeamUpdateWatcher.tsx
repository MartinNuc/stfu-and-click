import React, { useEffect, FC } from 'react';
import { TeamUpdateEvent } from 'stfu-and-click-shared/src/websockets';
import io from 'socket.io-client';
import { updateTeamScore } from '../store/leaderboardSlice';
import { useDispatch } from 'react-redux';

export const SocketTeamUpdateWatcher: FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('/');
    socket.on('teamUpdate', (data: TeamUpdateEvent) => {
      dispatch(updateTeamScore(data));
    });
    return () => {
      socket.close();
    };
  }, [dispatch]);

  return <>{children}</>;
};
