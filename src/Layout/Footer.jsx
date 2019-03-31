import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 24 }}>
          </span>
          <span style={{ marginRight: 12 }}></span>
          <span style={{ marginRight: 12 }}></span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
