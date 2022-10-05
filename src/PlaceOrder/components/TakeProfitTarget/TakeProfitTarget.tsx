import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

import {useStore} from '../../context';
import {QUOTE_CURRENCY} from 'PlaceOrder/constants';
import {NumberInput} from 'components';

import styles from './TakeProfitTarget.module.scss';

const TakeProfitTarget = ({
  id,
  targetAmount,
  handleDelete,
}: {
  id: number;
  targetAmount: number;
  handleDelete: (id: number) => void;
}) => {
  const {setTargetPrice, setProfit, setTargetAmount, targetPrice, profit} =
    useStore();

  return (
    <>
      <div className={styles.targetInputsBlock}>
        <div className={styles.targetProfit}>
          <NumberInput
            label='Profit'
            value={profit}
            onChange={value => setProfit(Number(value))}
            InputProps={{endAdornment: '%'}}
            variant='underlined'
          />
        </div>
        <div className={styles.targetPrice}>
          <NumberInput
            label='Target price'
            value={targetPrice}
            onChange={value => setTargetPrice(Number(value))}
            InputProps={{endAdornment: QUOTE_CURRENCY}}
            variant='underlined'
          />
        </div>
        <div className={styles.targetAmount}>
          <NumberInput
            label='Amount to sell'
            value={targetAmount}
            onChange={value => setTargetAmount(Number(value))}
            InputProps={{endAdornment: '%'}}
            variant='underlined'
          />
        </div>
        <span>
          <IconButton
            size='small'
            className={styles.closeIcon}
            onClick={() => handleDelete(id)}
          >
            <CancelIcon style={{width: 14}} />
          </IconButton>
        </span>
      </div>
    </>
  );
};

export {TakeProfitTarget};
