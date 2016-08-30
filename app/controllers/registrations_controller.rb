class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :access_level)
  end

  def account_update
    params.require(:user).permit(:username,:email, :password, :password_confirmation, :access_level)
  end

end
