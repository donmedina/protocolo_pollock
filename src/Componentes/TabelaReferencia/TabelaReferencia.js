import './TabelaReferencia.scss'

export const TabelaReferencia = () => {
    return (
        <div className='table-responsive row'>
            <div className='col'>
            <table className='table table-bordered table-striped'>
                <caption>IMC - Índice de massa corporal</caption>
                <thead className='table-light'>
                <tr>
                    <th scope='col'>IMC</th>
                    <th scope='col'>Classificação</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>menor que 17</td>
                    <td>Muito abaixo do peso</td>
                </tr>
                <tr>
                    <td>17,1 a 18,49</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr>
                    <td>18,6 a 24,99</td>
                    <td>Peso Normal</td>
                </tr>
                <tr>
                    <td>24,1 a 29,99</td>
                    <td>Acima do peso</td>
                </tr>
                <tr>
                    <td>30,1 a 34,99</td>
                    <td>Obesidade I</td>
                </tr>
                <tr>
                    <td>35,1 a 39,99</td>
                    <td>Obesidade II - Severa</td>
                </tr>
                <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade III - Mórbida</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className='col'>
                <table className='table table-bordered table-striped'>
                    <caption>Percentual de Gordura (G%) para homens</caption>
                    <thead className='table-light'>
                        <tr>
                            <th scope='col'>Nível/Idade</th>
                            <th scope='col'>18-25</th>
                            <th scope='col'>26-35</th>
                            <th scope='col'>36-45</th>
                            <th scope='col'>46-55</th>
                            <th scope='col'>56-65</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Excelente</td>
                            <td>4% a 7%</td>
                            <td>8% a 11%</td>
                            <td>10% a 15%</td>
                            <td>12% a 17%</td>
                            <td>13% a 19%</td>
                        </tr>
                        <tr>
                            <td>Bom</td>
                            <td>8% a 11%</td>
                            <td>12% a 15%</td>
                            <td>16% a 18%</td>
                            <td>18% a 20%</td>
                            <td>20% a 21%</td>
                        </tr>
                        <tr>
                            <td>Acima da Média</td>
                            <td>12% a 13%</td>
                            <td>16% a 18%</td>
                            <td>19% a 21%</td>
                            <td>21% a 23%</td>
                            <td>22% a 23%</td>
                        </tr>
                        <tr>
                            <td>Média</td>
                            <td>14% a 16%</td>
                            <td>19% a 21%</td>
                            <td>22% a 24%</td>
                            <td>24% a 25%</td>
                            <td>24% a 25%</td>
                        </tr>
                        <tr>
                            <td>Abaixo da Média</td>
                            <td>17% a 20%</td>
                            <td>22% a 24%</td>
                            <td>25% a 27%</td>
                            <td>26% a 27%</td>
                            <td>26% a 27%</td>
                        </tr>
                        <tr>
                            <td>Ruim</td>
                            <td>21% a 24%</td>
                            <td>25% a 27%</td>
                            <td>28% a 30%</td>
                            <td>28% a 31%</td>
                            <td>28% a 31%</td>
                        </tr>
                        <tr>
                            <td>Muito Ruim</td>
                            <td>25% a 36%</td>
                            <td>28% a 36%</td>
                            <td>31% a 39%</td>
                            <td>32% a 38%</td>
                            <td>32% a 38%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Falta ajeitar os valores */}
            <div className='col'>
            <table className='table table-bordered table-striped'>
                    <caption>Percentual de Gordura (G%) para mulheres</caption>
                    <thead className='table-light'>
                        <tr>
                            <th scope='col'>Nível/Idade</th>
                            <th scope='col'>18-25</th>
                            <th scope='col'>26-35</th>
                            <th scope='col'>36-45</th>
                            <th scope='col'>46-55</th>
                            <th scope='col'>56-65</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Excelente</td>
                            <td>13% a 16%</td>
                            <td>14% a 17%</td>
                            <td>16% a 19%</td>
                            <td>17% a 21%</td>
                            <td>18% a 22%</td>
                        </tr>
                        <tr>
                            <td>Bom</td>
                            <td>17% a 19%</td>
                            <td>18% a 20%</td>
                            <td>20% a 23%</td>
                            <td>22% a 25%</td>
                            <td>24% a 26%</td>
                        </tr>
                        <tr>
                            <td>Acima da Média</td>
                            <td>20% a 22%</td>
                            <td>21% a 23%</td>
                            <td>24% a 26%</td>
                            <td>26% a 28%</td>
                            <td>27% a 29%</td>
                        </tr>
                        <tr>
                            <td>Média</td>
                            <td>23% a 24%</td>
                            <td>25% a 26%</td>
                            <td>27% a 28%</td>
                            <td>29% a 30%</td>
                            <td>31% a 32%</td>
                        </tr>
                        <tr>
                            <td>Abaixo da Média</td>
                            <td>26% a 28%</td>
                            <td>27% a 29%</td>
                            <td>30% a 32%</td>
                            <td>32% a 34%</td>
                            <td>33% a 35%</td>
                        </tr>
                        <tr>
                            <td>Ruim</td>
                            <td>29% a 31%</td>
                            <td>31% a 33%</td>
                            <td>33% a 36%</td>
                            <td>35% a 38%</td>
                            <td>36% a 38%</td>
                        </tr>
                        <tr>
                            <td>Muito Ruim</td>
                            <td>32% a 43%</td>
                            <td>36% a 49%</td>
                            <td>37% a 48%</td>
                            <td>39% a 50%</td>
                            <td>39% a 49%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
    )
}
