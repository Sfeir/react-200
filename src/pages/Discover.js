import React, { memo, useState, useEffect, useCallback } from 'react';
import PersonCard from '../components/PersonCard';
import Fab from '../components/Fab';

// subcomponents

const Fabs = memo(({ playing, next, prev, play, pause }) => (
  <div className="control-container">
    <Fab kind="skip_previous" onClick={prev} />
    {playing ? (
      <Fab kind="pause" large onClick={pause} />
    ) : (
      <Fab kind="play_arrow" large onClick={play} />
    )}
    <Fab kind="skip_next" onClick={next} />
  </div>
));

// container

const usePlaying = showNext => {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (playing) {
      const tid = setTimeout(showNext, 2000);
      return () => clearTimeout(tid);
    }
  });
  const play = useCallback(() => {
    showNext();
    setPlaying(true);
  }, []);
  const pause = useCallback(() => setPlaying(false), []);
  return { playing, play, pause };
};

const Discover = ({
  current,
  showNext,
  showPrev,
  fromUsePlaying: { playing, play, pause } = usePlaying(showNext)
}) => {
  return (
    <>
      <div className="card-container">
        <PersonCard id={current} />
      </div>
      <Fabs
        playing={playing}
        next={showNext}
        prev={showPrev}
        play={play}
        pause={pause}
      />
    </>
  );
};

export default Discover;
