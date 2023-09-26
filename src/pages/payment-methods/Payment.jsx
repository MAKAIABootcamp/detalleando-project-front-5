import React, { useEffect, useState } from "react";
import arrow from "/icons/arrow-down.svg";
import trash from "/icons/trash-bin.svg";
import mastercard from "/icons/mastercard.svg";
import visa from "/icons/visa.svg";
import amex from "/icons/american-express.svg";
import creditCard from "/icons/credit-card.svg";
import close from "/icons/close-circle.svg";
import "./payment.scss";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateUserPayment } from "../../redux/auth/authActions";
import { setUserPayment } from "../../redux/auth/authReducer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { setMethod } from "../../redux/order/orderReducer";

const Payment = ({ isTypeSeller }) => {
  const [openForm, setOpenForm] = useState();
  const { userLogged } = useSelector((store) => store.auth);
  const { currentOrder } = useSelector(store => store.order);
  const [chosenMethod, setChosenMethod] = useState(currentOrder?.paymentMethod);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [chosenMethod])

  const handleClick = (method) => {
    setChosenMethod(method)
    dispatch(setMethod(method))
  }

  const getInfoCard = (cardNumber) => {
    const lastNumbersCard = cardNumber.toString().slice(-4);
    const lastNumbersToNumber = Number(lastNumbersCard);
    if (lastNumbersToNumber <= 3333) {
      return mastercard;
    } else if (lastNumbersToNumber > 3333 && lastNumbersToNumber <= 6666) {
      return visa;
    } else {
      return amex;
    }
  };

  const maskCardNumber = (cardNumber) => {
    const firstFour = cardNumber.substring(0, 4);
    const lastFour = cardNumber.substring(cardNumber.length - 4);

    const maskedMiddle = "*".repeat(8);

    const maskedCardNumber = `${firstFour} ${maskedMiddle} ${lastFour}`;

    return maskedCardNumber;
  };

  const onSubmit = (data) => {
    Swal.fire({
      title: "Quieres añadir este metodo de pago?",
      showCancelButton: true,
      confirmButtonText: "Añadir",
    }).then((result) => {
      if (result.isConfirmed) {
        if (userLogged.payment?.length > 0) {
          const newPaymentArray = [...userLogged.payment, data.cardNumber];
          dispatch(
            updateUserPayment(userLogged.id, { payment: newPaymentArray })
          );
          dispatch(setUserPayment(newPaymentArray));
        } else if (!userLogged.payment || !userLogged.payment.length) {
          const newPaymentArray = [data.cardNumber];
          dispatch(
            updateUserPayment(userLogged.id, { payment: newPaymentArray })
          );
          dispatch(setUserPayment(newPaymentArray));
        }
      }
      setOpenForm(false);
    });
  };

  return (
    !isTypeSeller && (
      <>
        <main className="payment-main">
          <div>
            <div className="navigate-back">
              <img
                src={arrow}
                alt="Icon for go back"
                onClick={() => navigate(-1)}
              />
              <h3>Metodos de pago</h3>
            </div>
            <div>
              {userLogged?.payment &&
                userLogged?.payment.length > 0 &&
                userLogged?.payment?.map((method) => (
                  <div
                    className={chosenMethod === method ? "method chosen" : "method"}
                    onClick={() => handleClick(method)}
                  >
                    <img
                      src={getInfoCard(method)}
                      alt=""
                      className="card-icon"
                    />
                    <span>{maskCardNumber(method)}</span>
                    <img src={trash} alt="Icon for delete" className="delete" />
                  </div>
                ))}
            </div>
          </div>
          <button className="payment-add" onClick={() => setOpenForm(true)}>
            Añadir metodo de pago
          </button>
        </main>
        {openForm && (
          <div className="new-container">
            <div className="new-form">
              <img
                src={close}
                alt="Icon for close"
                className="close"
                onClick={() => setOpenForm(false)}
              />
              <h4>Nuevo metodo de pago</h4>
              <div className="new-icon">
                <img
                  src={creditCard}
                  alt="Icon for credit card"
                  className="chosen"
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nombre" />
                <input
                  type="number"
                  placeholder="Numero de la tarjeta"
                  {...register("cardNumber", { required: true })}
                />
                <input type="text" placeholder="Fecha de vencimiento" />
                <input type="number" placeholder="CVC" />
                <button type="submit" className="new-button">
                  Guardar
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default Payment;
