import React, { Component } from "react";
import styled from "styled-components";

export default class GlobalModal extends Component {
  static myComponentInstance;

  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      animateClassName: undefined,
      modalProps: {},
    };

    GlobalModal.myComponentInstance = this;
  }

  static show(...param) {
    GlobalModal.myComponentInstance._show(...param);
  }

  static hide() {
    GlobalModal.myComponentInstance._hide();
  }

  timeoutUpdateVisibility = undefined; // cannot run show & close the same time

  _show(ModalUI, options = {}) {
    clearTimeout(this.timeoutUpdateVisibility);
    this.timeoutUpdateVisibility = setTimeout(() => {
      this.setState(() => ({
        visible: true,
        animateClassName: "animate-in",
        modalProps: { children: ModalUI, ...options },
      }));
      setTimeout(() => {
        this.setState(() => ({ animateClassName: undefined }));
      }, 200);
    }, 0);
  }

  _hide() {
    clearTimeout(this.timeoutUpdateVisibility);
    this.timeoutUpdateVisibility = setTimeout(() => {
      this.setState(() => ({ animateClassName: "animate-out" }));
      setTimeout(() => {
        this.setState(() => ({ visible: false, animateOut: false }));
      }, 200);
    }, 0);
  }

  render() {
    const {
      modalProps = {},
      visible,
      animateOut,
      animateClassName,
    } = this.state;
    if (!visible) return null;

    const {
      style,
      children,
      onPressBackground = hide,
      autoScale = true,
      ...restProps
    } = modalProps;
    return (
      <GlobalModalStyled className={animateClassName}>
        <div className="dimmer" onClick={onPressBackground} />
        <div className="center-modal" onClick={(e) => e.stopPropagation()}>
          {this.state.visible && children}
        </div>
      </GlobalModalStyled>
    );
  }
}

export const show = GlobalModal.show;
export const hide = GlobalModal.hide;

const GlobalModalStyled = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .center-modal.safe-area {
    @media (max-width: 414px) {
      transform: scale(0.5);
      top: 20%;
    }
  }
  @keyframes zoomIn {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
    }
    90% {
      transform: translate(-50%, -50%) scale(1.01);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes faceIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .dimmer {
    background-color: rgba(48, 48, 48, 0.6);
    width: 100%;
    height: 100%;
  }

  .center-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.animate-in {
    .dimmer {
      animation-name: faceIn;
      animation-duration: 0.3s;
    }
    .center-modal {
      animation-name: zoomIn, faceIn;
      animation-duration: 0.2s;
    }
  }
  &.animate-out {
    .dimmer {
      animation-name: faceIn;
    }
    .center-modal {
      animation-name: zoomIn, faceIn;
    }
    .dimmer,
    .center-modal {
      animation-duration: 0.2s;
      animation-direction: reverse;
      animation-fill-mode: forwards;
    }
  }
`;
