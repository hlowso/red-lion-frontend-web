import React, { forwardRef } from "react";
import { UI } from "frontend-common";
import * as icons from "react-bootstrap-icons";
import cn from "classnames";

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
import FormSelect from "react-bootstrap/FormSelect";
import FormCheck from "react-bootstrap/FormCheck";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";

const components = {
  Div: ({ children, ...props }: UI.DivProps) => (
    <div {...props}>{children}</div>
  ),
  Span: ({ children, ...props }: UI.SpanProps) => (
    <span {...props}>{children}</span>
  ),
  P: ({ children, ...props }: UI.PProps) => <p {...props}>{children}</p>,
  Strong: ({ children, ...props }: UI.StrongProps) => (
    <strong {...props}>{children}</strong>
  ),
  Image: (props: UI.ImageProps) => <Image {...props} rounded />,
  Card: ({ children, text, ...props }: UI.CardProps) => (
    <Card text={text as Color} {...props}>
      {children}
    </Card>
  ),
  CardHeader: ({ children, ...props }: UI.CardHeaderProps) => (
    <Card.Header {...props}>{children}</Card.Header>
  ),
  CardBody: ({ children, ...props }: UI.CardBodyProps) => (
    <Card.Body {...props}>{children}</Card.Body>
  ),
  CardTitle: ({ children, ...props }: UI.CardTitleProps) => (
    <Card.Title {...props}>{children}</Card.Title>
  ),
  Row: ({ children, ...props }: UI.RowProps) => (
    <Row {...props}>{children}</Row>
  ),
  Col: ({ children, ...props }: UI.ColProps) => (
    <Col {...props}>{children}</Col>
  ),
  Spinner: ({ small, ...props }: UI.SpinnerProps) => (
    <Spinner
      animation="border"
      role="status"
      size={small ? "sm" : undefined}
      {...props}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ),
  Link: ({ children, ...props }: UI.LinkProps) => <a {...props}>{children}</a>,
  Navbar: ({ children, style, ...props }: UI.NavbarProps) => (
    <Navbar
      {...props}
      bg={process.env.NODE_ENV === "production" ? "dark" : undefined}
      data-bs-theme="dark"
      style={{
        ...(style || {}),
        backgroundColor:
          process.env.NODE_ENV === "development" ? "#013220" : undefined,
      }}
    >
      {children}
    </Navbar>
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
  Dropdown: ({ label, items, action, ...props }: UI.DropdownProps) => (
    <Dropdown {...props}>
      <Dropdown.Toggle variant="secondary">{label}</Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map(({ id, label }) => (
          <Dropdown.Item key={id} onClick={() => action(id)}>
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ),
  ListGroup: ({ children, ...props }: UI.ListGroupProps) => (
    <ListGroup {...props}>{children}</ListGroup>
  ),
  ListGroupItem: forwardRef(
    ({ children, ...props }: UI.ListGroupItemProps, ref) => (
      <ListGroupItem ref={ref as React.Ref<HTMLDivElement>} {...props}>
        {children}
      </ListGroupItem>
    )
  ) as (props: UI.ListGroupItemProps) => JSX.Element,
  Toast: ({ children, ...props }: UI.ToastProps) => (
    <Toast {...props} show delay={7000} autohide>
      {children}
    </Toast>
  ),
  ToastHeader: ({ children, ...props }: UI.ToastHeaderProps) => (
    <Toast.Header {...props}>{children}</Toast.Header>
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
  ModalBody: ({ children, ...props }: UI.ModalBodyProps) => (
    <Modal.Body {...props}>{children}</Modal.Body>
  ),
  ModalFooter: ({ children, ...props }: UI.ModalFooterProps) => (
    <Modal.Footer {...props}>{children}</Modal.Footer>
  ),
  InputGroup: ({ children, ...props }: UI.InputGroupProps) => (
    <InputGroup {...props}>{children}</InputGroup>
  ),
  InputGroupText: ({ children, ...props }: UI.InputGroupTextProps) => (
    <InputGroup.Text {...props}>{children}</InputGroup.Text>
  ),
  FormControl: ({ children, ...props }: UI.FormControlProps) => (
    <FormControl {...props}>{children}</FormControl>
  ),
  FormSelect: ({ children, ...props }: UI.FormSelectProps) => (
    <FormSelect {...props}>{children}</FormSelect>
  ),
  FormSelectOption: ({ children, ...props }: UI.FormSelectOptionProps) => (
    <option {...props}>{children}</option>
  ),
  FormCheck: ({ ...props }: UI.FormCheckProps) => (
    <FormCheck {...props} type="checkbox" />
  ),
  FormRadio: ({ ...props }: UI.FormRadioProps) => (
    <FormCheck {...props} type="radio" />
  ),
  Icon: ({ name, ...props }: UI.IconProps) => {
    const BootstrapIcon = icons[(name as keyof typeof icons) || "Question"];
    return BootstrapIcon ? <BootstrapIcon {...props} /> : null;
  },
  OverlayTrigger: ({
    children,
    placement,
    disabled,
    ...props
  }: UI.OverlayTriggerProps) =>
    disabled ? (
      <div>{children}</div>
    ) : (
      <OverlayTrigger
        {...props}
        delay={{ show: 0, hide: 0 }}
        placement={placement || "right"}
      >
        <div>{children}</div>
      </OverlayTrigger>
    ),
  Tooltip: forwardRef(({ children, ...props }: UI.TooltipProps, ref) => (
    <Tooltip ref={ref as React.Ref<HTMLDivElement>} {...props}>
      {children}
    </Tooltip>
  )) as (props: UI.TooltipProps) => JSX.Element,
  Marked: ({ children }: UI.MarkedProps) => <Marked>{children}</Marked>,
  ProgressBar: ({
    progress,
    color,
    zone,
    className,
    ...props
  }: UI.ProgressBarProps) => (
    <ProgressBar
      {...props}
      now={progress}
      striped={zone === "glory"}
      animated={progress >= 100}
      variant={color}
      className={cn(className, zone, color)}
    />
  ),
};

export default components;
