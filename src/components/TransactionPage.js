import React from 'react';
import TransactionPageLayout from './TransactionPageLayout';
import NavbarComponent from './NavbarComponent';
import ActionBarTransactionComponent from './ActionBarTransactionComponent';
import TransactionTableComponent from './TransactionTableComponent';
import FooterComponent from './FooterComponent';

export default function TransactionPage({
  pageTitle,
  pages,
  transactions,
  selectedTransactionIds,
  categories,
  onShowCreateTransactionDialog,
  onOpenCreateTransactionDialog,
  onCloseCreateTransactionDialog,
  onSubmitTransaction,
  onSelectTransaction,
  onDeselectTransaction
}) {
  return (
    <TransactionPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <ActionBarTransactionComponent
        categories={categories}
        onShowCreateTransactionDialog={onShowCreateTransactionDialog}
        onCloseCreateTransactionDialog={onCloseCreateTransactionDialog}
        onOpenCreateTransactionDialog={onOpenCreateTransactionDialog}
        onSubmitTransaction={onSubmitTransaction}
      />
      <TransactionTableComponent
        transactions={transactions}
        selectedTransactionIds={selectedTransactionIds}
        onSelectTransaction={onSelectTransaction}
        onDeselectTransaction={onDeselectTransaction}
      />
      <FooterComponent pageTitle={pageTitle} />
    </TransactionPageLayout>
  );
}
