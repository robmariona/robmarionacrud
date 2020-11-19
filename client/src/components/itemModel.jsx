import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

//*Agregamos los componentes de formulario Agregar producto
class ItemModal extends Component {
  state = {
    modal: false,
    sku: "",
    name: "",
    cantidad: "",
    precio: "",
    descripcion: "",
    imagen: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.sku]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.cantidad]: e.target.value,
      [e.target.precio]: e.target.value,
      [e.target.descripcion]: e.target.value,
      [e.target.imagen]: e.target.value,
    });
  };

  onSubmit = (e) => {
    // prevenir el fomrulario actual al enviarse
    e.preventDefault();
    const newItem = {
      sku: this.state.sku,
      name: this.state.name,
      cantidad: this.state.cantidad,
      precio: this.state.precio,
      descripcion: this.state.descripcion,
      imagen: this.state.imagen,
    };

    //Agregar la acion para los items
    this.props.addItem(newItem);

    //Cerramos modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Agregar producto
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Agregar Producto</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="sku">SKU:</Label>
                <Input
                  type="text"
                  name="sku"
                  id="item"
                  placeholder="Agregar SKU"
                  onChange={this.onChange}
                ></Input>
                <Label for="name">Nombre:</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Agregar Producto"
                  onChange={this.onChange}
                ></Input>
                <Label for="cantidad">Cantidad:</Label>
                <Input
                  type="text"
                  name="cantidad"
                  id="item"
                  placeholder="Agregar Cantidad"
                  onChange={this.onChange}
                ></Input>
                <Label for="precio">Precio:</Label>
                <Input
                  type="text"
                  name="precio"
                  id="item"
                  placeholder="$0.00"
                  onChange={this.onChange}
                ></Input>
                <Label for="descripcion">Descripcion:</Label>
                <Input
                  type="text"
                  name="descripcion"
                  id="item"
                  placeholder="Escribe una descripcion para este producto"
                  onChange={this.onChange}
                ></Input>
                <Label for="imagen">Imagen: (URL) </Label>
                <Input
                  type="text"
                  name="imagen"
                  id="item"
                  placeholder="Agrega el url de la imagen"
                  onChange={this.onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  {" "}
                  Agregar
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

//Map el estado para el componente Agregar
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
