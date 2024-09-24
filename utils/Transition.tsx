import React, { useRef, useEffect, useContext, useState } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
import { ReactNode } from 'react';

interface TransitionContextType {
  parent: {
    show?: boolean;
    isInitialRender?: boolean;
    appear?: boolean;
  };
}

const TransitionContext = React.createContext<TransitionContextType>({
  parent: {},
})

interface CSSTransitionProps {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}


function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, [])
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: CSSTransitionProps) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;
  const nodeRef = React.useRef<HTMLElement | null>(null); 

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  const Component = tag;

  return (
    <ReactCSSTransition
    appear={appear}
    nodeRef={nodeRef}
    unmountOnExit={removeFromDom}
    in={show}
    addEndListener={(done) => {
      nodeRef.current?.addEventListener('transitionend', done, false) // Utilisation de l'opérateur de chaînage optionnel
    }}
    onEnter={() => {
      if (!removeFromDom) nodeRef.current!.style.display = ''; // Utilisation de l'opérateur d'affirmation non nulle
      addClasses(nodeRef.current!, [...enterClasses, ...enterStartClasses]) // Utilisation de l'opérateur d'affirmation non nulle
    }}
    onEntering={() => {
      removeClasses(nodeRef.current!, enterStartClasses) // Utilisation de l'opérateur d'affirmation non nulle
      addClasses(nodeRef.current!, enterEndClasses) // Utilisation de l'opérateur d'affirmation non nulle
    }}
    onEntered={() => {
      removeClasses(nodeRef.current!, [...enterEndClasses, ...enterClasses]) // Utilisation de l'opérateur d'affirmation non nulle
    }}
    onExit={() => {
      addClasses(nodeRef.current!, [...leaveClasses, ...leaveStartClasses]) // Utilisation de l'opérateur d'affirmation non nulle
    }}
    onExiting={() => {
      removeClasses(nodeRef.current!, leaveStartClasses) // Utilisation de l'opérateur d'affirmation non nulle
      addClasses(nodeRef.current!, leaveEndClasses) // Utilisation de l'opérateur d'affirmation non nulle
    }}
    onExited={() => {
      removeClasses(nodeRef.current!, [...leaveEndClasses, ...leaveClasses]) // Utilisation de l'opérateur d'affirmation non nulle
      if (!removeFromDom) nodeRef.current!.style.display = 'none'; // Utilisation de l'opérateur d'affirmation non nulle
    }}
    >
   
   <Component 
      ref={nodeRef} 
      {...rest} 
      style={{ display: !removeFromDom ? 'none' : undefined }} 
      {...{ children }} // Utiliser la décomposition pour passer les enfants
    />
    </ReactCSSTransition>
  )
}

interface TransitionProps {
  show: boolean;
  appear?: boolean;
  [key: string]: any; // pour d'autres props
}

import React, { useRef, useEffect, useContext, useState, ReactNode } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface TransitionContextType {
  parent: {
    show?: boolean;
    isInitialRender?: boolean;
    appear?: boolean;
  };
}

const TransitionContext = React.createContext<TransitionContextType>({
  parent: {},
});

interface CSSTransitionProps {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

const CSSTransition: React.FC<CSSTransitionProps> = ({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}) => {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;
  const nodeRef = useRef<HTMLElement | null>(null);

  const addClasses = (node: HTMLElement, classes: string[]) => {
    if (classes.length) node.classList.add(...classes);
  };

  const removeClasses = (node: HTMLElement, classes: string[]) => {
    if (classes.length) node.classList.remove(...classes);
  };

  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener('transitionend', done, false);
      }}
      onEnter={() => {
        if (!removeFromDom) nodeRef.current!.style.display = '';
        addClasses(nodeRef.current!, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current!, enterStartClasses);
        addClasses(nodeRef.current!, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current!, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current!, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current!, leaveStartClasses);
        addClasses(nodeRef.current!, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current!, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom) nodeRef.current!.style.display = 'none';
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? 'none' : undefined }}
        {...{ children }}
      />
    </ReactCSSTransition>
  );
};

interface TransitionProps {
  show: boolean;
  appear?: boolean; 
}

const Transition: React.FC<TransitionProps> = ({ show, appear, ...rest }) => {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;
  const [localShow, setLocalShow] = useState(show);

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show ?? false}
        children={<div className="content">Contenu à animer</div>}
      />
    );
  }

  return (
    <div>
      <button onClick={() => setLocalShow(!localShow)}>Toggle</button>
      <CSSTransition
        show={localShow}
        enter="enter"
        enterStart="enter-start"
        enterEnd="enter-end"
        leave="leave"
        leaveStart="leave-start"
        leaveEnd="leave-end"
        unmountOnExit
        {...rest}
      >
        <div className="content">Contenu à animer</div>
      </CSSTransition>
    </div>
  );
}

export default Transition;