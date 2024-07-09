CREATE TABLE facturas (
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fecha DATE,
    total INT(11)
) ENGINE=InnoDB;

CREATE TABLE elementos_comprados (
    id BIGINT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cantidad INT,
    precio_total INT,
    factura_id BIGINT(20),
    producto_id BIGINT(20),
    servicio_id BIGINT(20),
    INDEX facturaext_id (factura_id),
    INDEX productoext_id (producto_id),
    INDEX servicioext_id (servicio_id),
    FOREIGN KEY (factura_id) REFERENCES facturas(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (servicio_id) REFERENCES servicios(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;