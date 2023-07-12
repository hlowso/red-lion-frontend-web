import React, { forwardRef } from "react";
import { UI } from "frontend-common";
import * as icons from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Badge from "react-bootstrap/Badge";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Tooltip from "react-bootstrap/Tooltip";
import { Color } from "react-bootstrap/esm/types";
import Marked from "marked-react";

const components = {
  Div: ({ children, ...props }: UI.DivProps) => (
    <div {...props}>{children}</div>
  ),
  Span: ({ children, ...props }: UI.SpanProps) => (
    <span {...props}>{children}</span>
  ),
  P: ({ children, ...props }: UI.PProps) => <p {...props}>{children}</p>,
  Strong: ({ children }: UI.StrongProps) => <strong>{children}</strong>,
  Image: (props: UI.ImageProps) => <Image {...props} rounded />,
  Card: ({ children, text, ...props }: UI.CardProps) => (
    <Card text={text as Color} {...props}>
      {children}
    </Card>
  ),
  CardHeader: ({ children, ...props }: UI.CardHeaderProps) => (
    <Card.Header {...props}>{children}</Card.Header>
  ),
  Row: ({ children, ...props }: UI.RowProps) => (
    <Row {...props}>{children}</Row>
  ),
  Col: ({ children, ...props }: UI.ColProps) => (
    <Col {...props}>{children}</Col>
  ),
  Spinner: ({ small }: UI.SpinnerProps) => (
    <Spinner animation="border" role="status" size={small ? "sm" : undefined}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ),
  Link: ({ children, ...props }: UI.LinkProps) => <a {...props}>{children}</a>,
  Navbar: ({ children, ...props }: UI.NavbarProps) => (
    <Navbar {...props}>{children}</Navbar>
  ),
  NavbarCollapse: ({ children, ...props }: UI.NavbarCollapseProps) => (
    <Navbar.Collapse {...props}>{children}</Navbar.Collapse>
  ),
  NavbarBrand: ({ children, ...props }: UI.NavbarBrandProps) => (
    <Navbar.Brand {...props}>{children}</Navbar.Brand>
  ),
  ButtonGroup: ({ children, ...props }: UI.ButtonGroupProps) => (
    <ButtonGroup {...props}>{children}</ButtonGroup>
  ),
  Button: ({ children, ...props }: UI.ButtonProps) => (
    <Button {...props}>{children}</Button>
  ),
  ListGroup: ({ children, ...props }: UI.ListGroupProps) => (
    <ListGroup {...props}>{children}</ListGroup>
  ),
  ListGroupItem: ({ children, ...props }: UI.ListGroupItemProps) => (
    <ListGroupItem {...props}>{children}</ListGroupItem>
  ),
  Toast: ({ children, ...props }: UI.ToastProps) => (
    <Toast {...props} show delay={7000} autohide>
      {children}
    </Toast>
  ),
  ToastContainer: ({ children, ...props }: UI.ToastContainerProps) => (
    <ToastContainer {...props}>{children}</ToastContainer>
  ),
  Accordion: ({ children, open, ...props }: UI.AccordionProps) => (
    <Accordion {...props} flush activeKey={open ? ["0"] : undefined}>
      <AccordionItem eventKey="0">{children}</AccordionItem>
    </Accordion>
  ),
  AccordionHeader: ({ children }: UI.AccordionHeaderProps) => (
    <Accordion.Header>{children}</Accordion.Header>
  ),
  AccordionBody: ({ children }: UI.AccordionBodyProps) => (
    <Accordion.Body>{children}</Accordion.Body>
  ),
  Badge: ({ children, ...props }: UI.BadgeProps) => (
    <Badge {...props}>{children}</Badge>
  ),
  Modal: ({ children, title, ...props }: UI.ModalProps) => (
    <Modal {...props} animation={false}>
      {children}
    </Modal>
  ),
  ModalHeader: ({ children, ...props }: UI.ModalHeaderProps) => (
    <Modal.Header {...props} closeButton>
      <Modal.Title>{children}</Modal.Title>
    </Modal.Header>
  ),
  InputGroup: ({ children, ...props }: UI.InputGroupProps) => (
    <InputGroup {...props}>{children}</InputGroup>
  ),
  FormControl: ({ children, ...props }: UI.FormControlProps) => (
    <FormControl {...props}>{children}</FormControl>
  ),
  Icon: ({ name, size, ...props }: UI.IconProps) => {
    const BootstrapIcon = icons[name as keyof typeof icons];
    return <BootstrapIcon {...props} />;
  },
  OverlayTrigger: ({ children, ...props }: UI.OverlayTriggerProps) => (
    <OverlayTrigger {...props} delay={{ show: 0, hide: 0 }} placement="right">
      <div>{children}</div>
    </OverlayTrigger>
  ),
  Tooltip: forwardRef(({ children, ...props }: UI.TooltipProps, ref) => (
    <Tooltip ref={ref as any} {...props}>
      {children}
    </Tooltip>
  )) as any,
  Marked: ({ children }: UI.MarkedProps) => <Marked>{children}</Marked>,
};

export default components;
