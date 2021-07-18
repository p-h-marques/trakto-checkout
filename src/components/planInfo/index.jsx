import React from 'react'
import { PlanInfoStyles } from './styles'

const PlanInfo = () => {
    return (
        <PlanInfoStyles>
            <div className="ticket">
                <div className="resume">
                    <div className="infos">
                        <p>
                            Resumo da Compra
                        </p>
                        <div>
                            <span>Inserir Cupom 🎉</span>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="icon"></div>
                        <div className="infos">
                            <p>Plano Pro</p>
                            <p>Renovado anualmente</p>
                        </div>
                        <div className="value">
                            R$ 25,50
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="payment">
                    <div className="setup">
                        <select name="recurrence" id="recurrence">
                            <option value="Mensal">Mensal</option>
                            <option value="Anual">Anual</option>
                        </select>

                        <div className="value">
                            <span>R$</span>
                            <span className="value">25,50</span>
                            <span>/Mês</span>
                        </div>
                    </div>

                    <div className="terms">
                        <label htmlFor="planTerms">
                            <input type="checkbox" name="planTerms" id="planTerms" />
                            <span>Concordar com os <a>Termos de Uso.</a></span>
                        </label>

                    </div>
                </div>
            </div>
        </PlanInfoStyles>
    )
}

export default PlanInfo