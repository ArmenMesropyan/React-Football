import React from 'react';

const ErrorIndicator = () => (
    <div className="alert alert-dismissible alert-danger container text-center">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <h3 className="alert-heading">Error!</h3>
        <p className="mb-0">Something goes wrong... please reload page and try again!</p>
    </div>
)

export default ErrorIndicator;