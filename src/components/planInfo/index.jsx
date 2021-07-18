import React, { useContext } from 'react'
import { PlanInfoStyles } from './styles'

import {formatingValue} from '../../utils/formats'
import Context from '../../state/Context'
import * as actions from '../../state/actions'

const PlanInfo = () => {
    const {state, dispatch} = useContext(Context)

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
                            R$ {formatingValue(state.plan.value[state.plan.recurrence])}
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="payment">
                    <div className="setup">
                        <select name="recurrence" id="recurrence"
                            value={state.plan.recurrence}
                            onChange={(e)=>{dispatch(actions.updateRecurrence(e.target.value))}}
                        >
                            <option value="monthly">Mensal</option>
                            <option value="anual">Anual</option>
                        </select>

                        <div className="value">
                            <span>R$</span>
                            <span className="value">
                                {formatingValue(state.plan.value[state.plan.recurrence])}
                            </span>
                            <span>
                                {state.plan.recurrence === 'monthly' ? '/Mês' : '/Ano'}
                            </span>
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