import React from "react";
import TransactionPageLayout from "./TransactionPageLayout";
import NavbarComponent from "./NavbarComponent";
import ActionBarTransactionComponent from "./ActionBarTransactionComponent";
import TransactionTableComponent from "./TransactionTableComponent";
import FooterComponent from "./FooterComponent";

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
  onDeselectTransaction,
  onShowUpdateTransactionDialog,
  onCloseUpdateTransactionDialog,
  onOpenUpdateTransactionDialog,
  onUpdateTransaction,
  onDeleteTransaction,
  token,
  userId,
  onLogoutUser,
  history
}) {
  if (transactions === "Failed to fetch" || categories === "Failed to fetch")
    return <h1>Internal Server Error</h1>;
  else
    return (
      <TransactionPageLayout>
        <NavbarComponent
          pageTitle={pageTitle}
          pages={pages}
          token={token}
          onLogoutUser={onLogoutUser}
          history={history}
        />
        <ActionBarTransactionComponent
          categories={categories}
          token={token}
          authenticatedUserId={userId}
          transactions={transactions}
          onSelectTransaction={onSelectTransaction}
          onShowCreateTransactionDialog={onShowCreateTransactionDialog}
          onCloseCreateTransactionDialog={onCloseCreateTransactionDialog}
          onOpenCreateTransactionDialog={onOpenCreateTransactionDialog}
          onSubmitTransaction={onSubmitTransaction}
          onShowUpdateTransactionDialog={onShowUpdateTransactionDialog}
          onCloseUpdateTransactionDialog={onCloseUpdateTransactionDialog}
          onOpenUpdateTransactionDialog={onOpenUpdateTransactionDialog}
          onUpdateTransaction={onUpdateTransaction}
          selectedTransactionIds={selectedTransactionIds}
          onDeleteTransaction={onDeleteTransaction}
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
