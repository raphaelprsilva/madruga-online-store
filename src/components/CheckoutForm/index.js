import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const STATES = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

class CheckoutForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <S.CheckoutFormWrapper onSubmit={ handleSubmit }>
        <S.InputWrapper
          type="text"
          name="email"
          placeholder="Nome completo"
          data-testid="checkout-fullname"
        />
        <S.InputWrapper
          type="email"
          name="email"
          placeholder="Email"
          data-testid="checkout-email"
        />
        <S.InputWrapper
          type="text"
          name="cpf"
          placeholder="CPF"
          data-testid="checkout-cpf"
        />
        <S.InputWrapper
          type="text"
          name="phone"
          placeholder="Telefone"
          data-testid="checkout-phone"
        />
        <S.InputWrapper
          type="text"
          name="cep"
          placeholder="CEP"
          data-testid="checkout-cep"
        />
        <S.InputWrapper
          type="text"
          name="address"
          placeholder="Endereço"
          data-testid="checkout-address"
        />
        <S.InputWrapper
          type="text"
          name="complement"
          placeholder="Complemento"
          data-testid="checkout-complement"
        />
        <S.InputWrapper
          type="number"
          name="number"
          placeholder="Número"
          data-testid="checkout-number"
        />
        <S.InputWrapper
          type="text"
          name="city"
          placeholder="Cidade"
          data-testid="checkout-city"
        />
        <S.SelectWrapper name="" id="">
          {STATES.map((state) => (
            <option value={ state } key={ state }>
              {state}
            </option>
          ))}
        </S.SelectWrapper>
        <S.Fieldset>
          <legend>Forma de pagamento</legend>
          <label htmlFor="payment">
            Cartão de crédito
            <input type="radio" name="payment" id="payment" />
          </label>
          <label htmlFor="payment">
            Boleto
            <input type="radio" name="payment" id="payment" />
          </label>
        </S.Fieldset>
        <S.SubmitButton type="submit">Comprar</S.SubmitButton>
      </S.CheckoutFormWrapper>
    );
  }
}

CheckoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CheckoutForm;
