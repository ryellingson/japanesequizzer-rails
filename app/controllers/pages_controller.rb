class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home
  skip_after_action :verify_authorized, only: [ :home, :leaderboards ]

  def home
  end

  def leaderboards
    @games = Game.all
  end
end
