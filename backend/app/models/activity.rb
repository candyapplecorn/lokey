class Activity < ApplicationRecord
  validates :name, presence: true

  has_many :events
end
